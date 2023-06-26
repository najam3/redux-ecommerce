/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {IoIosAdd} from 'react-icons/io'
import {
  getCategory,
  getProducts,
  addToCart,
  selectedProducts,
  getDuplciateProducst,

} from "../store/actions/cartActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./css/Category.module.css";


const Category = () => {
  const category = useSelector(({ category }) => category);
  const products = useSelector(({ productsData }) => productsData);
  const cartItems = useSelector(({cartItems}) => cartItems);
  const isCartAdded = useSelector(({cartAdded}) => cartAdded)
  const [toast, showToast] = useState(false);
  const [message, setMessage] = useState("Product has been added to the cart")
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   

  function addCart(product) {
          dispatch(addToCart());
         dispatch(selectedProducts(product));
         showToast(true);
         console.log(cartItems)
  }

function duplicateItem(product) {
 dispatch(getDuplciateProducst(product));

 if(!isCartAdded) {
   showToast(true);
   setMessage("Product already added to the cart")
 } 
}





  useLayoutEffect(() => {
    let timer;
    if (showToast) {
      timer = setTimeout(() => {
        showToast(false);
      }, 3000); // Adjust the duration as needed (in milliseconds)
    }
      
    return () => {
      clearTimeout(timer);
    };
  }, [toast, cartItems]);

 

  
// Redux action to fetch from an Api.
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

// To remove certain Elements from the page on small screens
useEffect(() => {
  window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
  })
}, [windowWidth])

  return (
    <div className="w-100">
      <div className="container py-5">
        <div className={styles.wrapperStyles}>
        {
          windowWidth > 768 ?<CategoryMenu dispatch={dispatch}/> : ""
        }

          <div className={styles.flex2Styles}>
            {products.map((product, index) =>
              product.category === category ? (
                <div key={index} className={`card py-2 shadow ${styles.cardStyles}`}>
                  <img
                    src={product.image}
                    class="card-img-top w-50 h-50"
                    alt={product.title}
                  />
                  <div  class={`card-body ${styles.cardBodyStyle}`}>
                    <h5 class={`card-title ${styles.cardBodyTitle}`}>{product.title}</h5>
                    <p class="card-text bg-light  text-dark">
                      {product.description.substring(0, 100)}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className={`card-text m-0 text-success ${styles.cardPrice}`}>${product.price}</p>
                      <a
                        href="#"
                        onClick={() => {
                          addCart(product);
                          duplicateItem(product);
                        }}
                        class="btn btn-sm btn-dark"
                      >
                        <IoIosAdd />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
           
          </div>
        
        </div>
             {
             toast && <Toast showToast={showToast} message={message}/>
             }
      </div>
    </div>
  );
};


const CategoryMenu = ({dispatch}) => {
 const flex1Styles = {
  flex: 1,
  height: "26vh"
 }
   return(
   <div style={flex1Styles} className="shadow card h-0">
    <div className="card-header bg-dark text-light">
       Categories
    </div>
        <div className="list-group">
          <li style={{cursor:'pointer'}} onClick={() => dispatch(getCategory("men's clothing"))} className="list-group-item bg-light">Men's Clothing</li>
          <li style={{cursor:'pointer'}} className="list-group-item bg-light" onClick={() => dispatch(getCategory("women's clothing"))}>Women's Clothing</li>
          <li style={{cursor:'pointer'}} className="list-group-item bg-light" onClick={() => dispatch(getCategory("electronics"))}>Electronics</li>
          <li style={{cursor:'pointer'}} className="list-group-item bg-light">
            <Link className="text-decoration-none text-success" to={"/"}>Go back to homepage</Link>
          </li>
        </div>
    </div>

   )

}


const Toast = ({showToast, message}) => {
  return(
    <>
    <div style={{position: 'absolute', bottom:0, right: 0}} className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Cart updated</strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => showToast(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
           {message}
          </div>
        </div>
    
    
    </>
  )
}

export default Category;
