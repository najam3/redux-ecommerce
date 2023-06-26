import React, { useEffect } from 'react'
import { getProducts, showDescription } from '../store/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './css/Products.module.css';
import { FaAmazon, FaShopify, FaStar } from 'react-icons/fa';
// import { AiOutlineAlibaba } from 'react-icons/ai;'
import { SiAliexpress, SiWalmart, SiEbay, SiInstacart } from 'react-icons/si';
import img from './imgs/fashion-g8bf732064_1920.jpg';
import {useNavigate} from 'react-router-dom'
import Slider from 'react-slick';


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(({productsData}) => productsData);
   const navigate = useNavigate();

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
     dispatch(getProducts())      
  }, [dispatch])
  
  return (

      <div className={styles.products}>
        <div className="container">
         <div className={styles.partnerBlock}>
           <h2 className='mb-4'>Our Partners</h2>
           <div className={styles.partners}>
            <span className={`bg-light p-5 shadow border-rounded`}>
            <FaAmazon size={80} />
            </span>
            <span className={`bg-light p-5 shadow border-rounded`}>
            <FaShopify size={80} />
            </span>
            <span className={`bg-light p-5 shadow border-rounded`}>
            <SiAliexpress size={80} />
           </span>
            <span className={`bg-light p-5 shadow border-rounded`}>
            <SiWalmart size={80} />
           </span>
            <span className={`bg-light p-5 shadow border-rounded`}>
            <SiEbay size={80} />
           </span>
            <span className={`bg-light p-5 shadow border-rounded`}>
            <SiInstacart size={80} />
           </span>
           </div>
         </div>
         <div className={styles.trendingProducts}>
            <div className={styles.trendingProduct}>
                 <h2 className='ms-5 mb-3'>Trending Products</h2>
                 <div className={`${styles.trending}`}>
                  {
                    products.map((product,i) => (
                      product.rating.rate >= 4 ?
                      
                      <div key={i} className={`${styles.cardy} card my-4 border-0 text-center ms-5`}>
                        <img src={product.image}
                         className={`card-img-top ${styles.cardImg} mx-auto`}
                         alt={product.title} />
                         <div className="card-body">
                            <h5 className={`card-title ${styles.cardTitle}`}>
                              {product.title.substring(0,20)}
                              </h5>
                            <span className='card-text'>
                                {product.rating.rate} <FaStar color='orange'/>
                            </span>
                         </div>
                      </div> : ""
                    ))
                  }
                 </div>              
            </div>
         

          </div>
         </div>

         <div className={`${styles.featured} w-75`}>
               <div className="container">
                  <h2 className={`${styles.featured}`}>Featured Men's Collection</h2>
                  <div className={`flex-wrapper d-flex gap-5 mt-4 mb-5 ${styles.featured}`}>
                      {
                        products.map((product, i) => (
                            product.category === "men's clothing" ? 
                            <div key={i} className={`card my-4 border-0 text-center ms-5 ${styles.cardy}`} onClick={() => {
                              navigate("/details");
                              dispatch(showDescription(i))
                            }}>
                            <img src={product.image}
                             className={`card-img-top ${styles.cardImg} mx-auto`}
                             alt={product.title} />
                             <div className="card-body">
                                <h5 className={`card-title ${styles.cardTitle}`}>
                                  {product.title.substring(0,20)}
                                  </h5>
                                <span className='card-text'>
                                    {product.rating.rate} <FaStar color='orange'/>
                                </span>
                             </div>
                          </div> : ""
                        ))
                      }
                  </div>
               </div>
            </div>
             <div className={`${styles.callAction}`}>
             <div className="container">
               <div className={`py-3 ${styles.actions}`}>
              <div className={styles.actionLeft}>
                  <h3>Your One Shop in Town</h3>
              <p style={{maxInlineSize:'30rem'}}>
              Step into our virtual boutique and immerse yourself in a world of sartorial excellence. 
              We curate a diverse range of meticulously crafted garments, from trendy streetwear to elegant formal attire,
               ensuring that there's something to suit every taste and occasion. Our collection features premium fabrics,
               impeccable cuts, and attention to detail, resulting in garments that not only look fantastic but also feel incredible to wear. 
              </p>
              <button  className={`${styles.fashion} me-3`}>
                Shop now
              </button>
              <button className={`${styles.fashion} me-3`}>
                Sign up
              </button>
              </div>
              <div className={styles.actionRight}>
                <img src={img} className='img-fluid  shadow rounded' alt="" />
               </div>
               </div>
             </div>
            </div>

      </div>
      
     
  
  )
}

export default Products