import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BestSeller } from './ProductCards'
import Checkout from './Checkout'


const BuyNow = () => {
  // const forCheckout = () =>{
  //   var emptyArray = []
  //   for (let i = 0; i < BestSeller.length + 1; i++) {
  //     emptyArray[i] = 0;
  //   }
  //   return emptyArray
  // }
  // const [] = useState;
  return (
    <>
    <Header/>
    <>
    <h1>Hello</h1>
    {BestSeller.map((getProduct) =>{
      return <Checkout key={getProduct.id} data={getProduct}/>
    })}
    </>
    <Footer/>
    </>
  )
}

export default BuyNow