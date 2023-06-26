import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from './css/Details.module.css'
import { useDispatch } from 'react-redux';
import { selectedProducts, addToCart, showDescription } from '../store/actions/cartActions';
import {FaStar} from 'react-icons/fa'
const Details = () => {
    const [recommended, setRecommended] = useState([]);
    const productsData = useSelector(({productsData}) => productsData);
   const description = useSelector(({description}) => description);
   const dispatch = useDispatch();
 


   useEffect(() => {
    let count = 0;
    const recommendedProducts = [];
    for (let i = description + 1; i < productsData.length; i++) {
      const element = productsData[i];
      count++;
      recommendedProducts.push(element);
      if (count === 5) {
        break;
      }
    }
    setRecommended((prev) => [...prev, ...recommendedProducts]);
  }, [description, productsData]);
  
 
  function addtoMyCart(product) {
     dispatch(selectedProducts(product))
     dispatch(addToCart())
  }
  


  return (
    <div>
        <div className='container'>
         <div className={styles.description}>
        <div className={styles.flexOne}>
        <img src={productsData[description].image}
         alt={productsData[description].title}
          style={{marginLeft:'136px'}} width={400}/>
        </div>
           <div className={styles.flexTwo}>
            <div className={styles.innerContent}>
            <h1>{productsData[description].title}</h1>
            <p>{productsData[description].description}</p>
            <div className='d-flex align-items-center justify-content-between'>
             <h2>${productsData[description].price}</h2> 
              <button type='button' onClick={() => addtoMyCart(productsData[description])} className={styles.btnAction}>Add to cart</button>
            </div>
            </div>
           </div>
        
          </div>
           <div className={styles.recommended}>
             <h3>Recommended</h3>
            <div className="container">
           <div className={`py-3 ${styles.flexThree}`}>
              {
                recommended.map((product, i) => (
                    <div key={i} className='d-flex align-items-center border-top border-bottom py-4 w-100 gap-3'>
                    <div onClick={() => dispatch(showDescription(i))}>
                       <img src={product.image} alt={product.title} className={`${styles.image}  img-fluid`} width={200} height={200} />
                    </div>
                    <div className={styles.info}>
                        <div>
                     <p>{product.title}</p>
                     <p className='fw-light'>${product.price}</p>
                       <span><FaStar color='orange'/></span>
                       <span><FaStar color='orange'/></span>
                       <span><FaStar color='orange'/></span>
                       <span><FaStar color='orange'/></span>
                       <span><FaStar /></span>
                        </div>
                        <div>
                            <button type='button' onClick={() => addtoMyCart(product)} className={styles.btnAction}>Add to Cart</button>
                        </div>
                    </div>
                    <hr />
                   </div>
                   
                ))
            
              }
                 
              
           </div>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Details