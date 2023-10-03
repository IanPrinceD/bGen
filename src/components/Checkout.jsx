import React from 'react'

const Checkout = (props) => {
    const {Image, Model, Rating, Price} = props.data
  return (
    <>
    <section className="BuysNowContainer">
      <div className='BuyNowImage'>
        <img src={Image} alt="" />
      </div>
      <div className='BuyNowDetails'>
        <div className='productModel'>
          <h2>{Model}</h2>
          <h3>{Rating}</h3>
        </div>
        <div className='productPrice'>
          <h2>{Price}</h2>
        </div>
      </div>
    </section>
    </>
  )
}

export default Checkout