import React, { useCallback, useEffect, useState } from "react";
import "./css/Navigation.css";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { deleteProduct, getCategory, getNewPrice } from "../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
    const [cActive, setcActive ] = useState(false);
    const [mActive, setmActive ] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [scrollPos, setScrollPos] = useState(0);
    const [hideMenu, setHideMenu] = useState(true);
    const cart = useSelector(({cart}) => cart);
    const addedItems = useSelector(({cartItems}) => cartItems);
    const isCartAdded = useSelector(({cartAdded}) => cartAdded)
    const [total, setTotal ] = useState(0);
   const dispatch = useDispatch();

    const getQuantity = (items, i, value) => {
     let itemInfo = { index: i, quantity: value  }
       dispatch(getNewPrice(itemInfo));
    }

    const scrollToTop = () => {
      window.scroll({
        top: 0,
        behavior: "smooth"         
      })
    }

    const getTotal = () => {
        const tot = addedItems.reduce((curr, acc) => {
        return curr + acc.price
       }, 0)
      setTotal(tot);
    
    }


 useEffect(() => {
    getTotal()
    
 })
 

 useEffect(() => {
   window.addEventListener("resize", () =>{
      setWindowWidth(window.innerWidth)
   })

  window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
  })
 }, [windowWidth, scrollPos]);

  return (
    <nav className={scrollPos > 10 ? "animation" : ""}>
      <div className="logo d-flex justify-content-between w-100 align-items-center">
        <Link to="/">SHOP</Link>
        <div className="d-flex align-items-center justify-content-center gap-3"> 
           
            {
             windowWidth <= 500 && 
             <OffCanvas cart={cart} addedItems={addedItems} total={total} getTotal={getTotal}  isCartAdded={isCartAdded} getQuantity={getQuantity}  dispatch={dispatch}  deleteProduct={deleteProduct}/>
            }
            <GiHamburgerMenu  onClick={() => setHideMenu(false)} style={windowWidth <= 500 ? {display: "block", cursor: 'pointer'} : { display: "none" }}/>
        </div>
       
      </div>

        <div className="nav_bar">
        <div style={!hideMenu ? {display: 'block'} : {display: "none"}} className="nav_links">
        {
            windowWidth <= 500 ? 
            <MainMenu scrollToTop={scrollToTop} cart={cart} dispatch={dispatch} hideMenu={hideMenu} setHideMenu={setHideMenu} cActive={cActive} mActive={mActive} setcActive={setcActive} setmActive={setmActive}/> : 
             ""
        }
        </div>   
      </div>
      {
        windowWidth > 768 &&  
        <>
        <OriginalMenu cart={cart} addedItems={addedItems} total={total} getTotal={getTotal}  getQuantity={getQuantity} isCartAdded={isCartAdded}  scrollToTop={scrollToTop}  dispatch={dispatch} deleteProduct={deleteProduct}  />
        </>
        
      }
    </nav>
  );
};

const OriginalMenu = ({ cart, scrollToTop, addedItems, total, getQuantity, deleteProduct, dispatch, getTotal, isCartAdded }) => {
    return(
     <>
     <div className="nav_links">
          <li className="nav_items">
            <Link onClick={scrollToTop} to="/">Home</Link>
          </li>
          <li className="nav_items">
            <Link onClick={scrollToTop} to="/category">Products</Link>
          </li>
          <li className="nav_items">
            <Link onClick={scrollToTop} to="/">Contact</Link>
          </li>
          <li className="nav_items">

          <OffCanvas cart={cart} addedItems={addedItems} total={total} getQuantity={getQuantity}  isCartAdded={isCartAdded} getTotal={getTotal} dispatch={dispatch} deleteProduct={deleteProduct}/>
            
          </li>
     </div>
    </>
    )
}

const MainMenu = ({ mActive, cActive, setcActive, setmActive, scrollToTop, setHideMenu, dispatch }) => {
    return(
        <>
      <div  className="tabs">
        <div className="btns bg-secondary d-flex flex-row w-70 h-25 me-5">
      <button onClick={() => setHideMenu(true)} type="button" className="btn_close bg-transparent text-white fw-bold fs-6 border-0">X</button>
            <button style={!mActive ? {background:'transparent'} : {background:'lightblue'}} className="tab_btn border-0" onClick={() => {
                setcActive(false);
                setmActive(true);
            }}>Main menu</button>

            <button style={!cActive ? {background:'transparent'} : {background:'lightblue'}} className="tab_btn border-0"  onClick={() => {
              setmActive(false);
              setcActive(true);
            }}>Categories</button>

        </div>
              {
            mActive &&
            <div className="tab-1 mt-3 d-flex flex-column gap-3">
            <li className="nav_items">
            <Link onClick={() => {
              setHideMenu(true)
              scrollToTop()
              }} className="fs-4" to="/">Home</Link>
          </li>
          <li className="nav_items">
            <Link onClick={() => {
              setHideMenu(true)
              scrollToTop()
            }} className="fs-4" to="/category">Products</Link>
          </li>
          <li className="nav_items">
            <Link onClick={() => {
              scrollToTop()
              setHideMenu(true)
            }} className="fs-4" to="/">Contact</Link>
          </li>
     
            </div>
         }   
          {
            cActive &&
            <div className="tab-2 mt-3 d-flex flex-column gap-3">     
          <li className="nav_items">
            <Link onClick={() => {
                setHideMenu(true)
                scrollToTop()
                dispatch(getCategory("men's clothing"))
            }} className="fs-4" to="/category">Men's Clothing</Link>
          </li>
          <li className="nav_items">
            <Link onClick={() =>{
                 setHideMenu(true)
                 scrollToTop()
                 dispatch(getCategory("women's clothing"))
            }} className="fs-4" to="/category">Women's Clothing</Link>
          </li>
          <li className="nav_items">
            <Link onClick={() => {
                setHideMenu(true)
                scrollToTop()
                dispatch(getCategory("electronics"))
            }} className="fs-4" to="/category">Electronics</Link>
           </li>
          </div>
          }
     </div>
        </>
    )
}

const OffCanvas = ({ cart, addedItems, total, getQuantity, dispatch, deleteProduct, isCartAdded, getTotal }) => {
  return(
    <>
      <button className="btn btn-sm position-relative"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <AiOutlineShoppingCart color="#fff" size={20}/>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                 {isCartAdded ? cart : cart - 1}
  </span>
      </button>


<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel" className="text-dark">Cart Summary</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
      {
        addedItems.length ===  0 ? <p className="lead text-dark">No Items Carted!</p> :
      addedItems.map((items, i) => (
        
    <div className="container">
      <div key={i} className="card py-3 px-3 d-flex flex-row gap-3">
      <img src={items.image} className="img-fluid w-25" alt={items.url} />
      <div style={{width:'50px'}} className="d-flex flex-column ">
      <p style={{color: "black", fontSize: '12px'}} className="h6">{items.title.substring(0, 21)}</p>
       <select onChange={(e) => {
        const value = e.target.value;
        getQuantity(items, i, value)
        
       }} name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
       </select>
      </div>
      <button type="button" onClick={() => {
            
           dispatch(deleteProduct(i))
      }}  style={{position:'absolute', right:'0'}} className="btn-close pe-4"></button>
      <p className="lead  fs-6 fw-bold pe-2" style={{position:'absolute', color:'gray', right:'0', bottom: 0}}>${!items.newerPrice ? items.price : items.newerPrice}</p>
      </div>
    </div>
    
        ))  
      }
      <hr className="text-dark"/>
    <div className="d-flex flex-column align-items-end">
    <p className="h6 text-dark">Total</p> 
    <p className="lead text-dark">${Math.floor(total)}</p> 
    </div>
  </div>
</div>
    </>
  )
}
export default Navigation;
