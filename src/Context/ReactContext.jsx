import React from 'react'
import { useState, createContext } from 'react';
import { BestSellerCard } from '../components/Productlist';

const ByteGenius = createContext(null)

const forCheckout = () =>{
  var emptyArray = []
  for (let i = 0; i < BestSellerCard.length; i++) {
    emptyArray[i] = 0;
  }
  return emptyArray
}

const ReactContext = (props) => {
  const [newProduct, setNewProduct] = useState(forCheckout);
  const newFunction = (itemid) =>{
    if (newProduct[itemid] === 0) {
      setNewProduct((prev) =>{
        const updateCard = {...prev, [itemid]:(prev[itemid] || 0) + 1}
        return updateCard;
      })
    }
  }
  const contextValue = {newFunction, newProduct}
  return <storeContext.Provider value={newFunction}>{props.children}</storeContext.Provider>
}

export default {ReactContext, ByteGenius}