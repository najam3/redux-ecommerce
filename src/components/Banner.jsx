import React from 'react';
import './css/Banner.css';
import img from './imgs/pexels-ylanite-koppens-934063.jpg';
import styles from './css/banner.module.css';


const Banner = () => {

const btnStyles = {
  backgroundColor: 'darkblue',
  padding: '0.5em 1em',
  fontWeight: 'bold',
  borderRadius: '6px',
  color: 'white',
  border: '0',
  cursor: 'pointer',
  marginTop: '2em'
}



  return (
    <div className='banner'>
       <div className="inner-content">
        <div className="container">
         <div className="flex-container">
         <div className="left">
        <p>We curate a diverse range of meticulously crafted garments.</p>
        <h1>Unleash Your Style: Shop the Latest Fashion Trends! </h1>
        <button className="btn" style={btnStyles}>Buy Now</button>
         </div>
       
         </div>

        </div>
       </div>
    </div>
  )
}


export const Button = ({manipulateProduct, text, btnStyles}) => {
  return(
      <button style={btnStyles} onClick={manipulateProduct} className='cart'>{text}</button>
  )
}




export default Banner;