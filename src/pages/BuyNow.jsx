import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/BuyNow.css'
import '../css/main.css'
import BuyCarousel from '../components/BuyCarousel'
// import { BestSellerCard } from './Productlist'
// import Checkout from './Checkout'
// import ReactContext from '../Context/ReactContext'


const BuyNow = () => {
  const [count, setCount] = useState(0);
  const handleClick = () =>{
    setCount(count + 1)
  }

  const mainternance = () =>{
    alert("Sorry for the inconvinience but this page is under maintenance!")
  }
  // const [countMinus, setCountMinus] = useState(0);
  // const handleClickMinus = () =>{
  //   setCountMinus(countMinus - 1)
  // }
  return (
    <>
    <Header/>
    <>
    <div className='body'>
      <div className='main'>
        <section className="buyNowContainer">
          <div className='forGridContainer'>
            <div className='photosContainer'>
              <BuyCarousel/>
            </div>
            <div className='detailsContainer'>
              <div className='detailItems'>
                <h3>Acer Nitro 5 AN515-58-55lg</h3>
                <h5>⭐⭐⭐⭐⭐</h5>
              </div>
              <div className='pricing'>
                <h3>PHP 60,799</h3>
                <p>Quantity</p>
                <p>{count}</p>
                <div className="buttons">
                  <button className='addButton' type='button' onClick={handleClick}>+</button>
                  <button className='minusButton' type='button'>-</button>
                  <button onClick={mainternance}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    
    </>
    <Footer/>
    </>
  )
}

export default BuyNow