import React from 'react'
import { BestSellerCard } from './Productlist'
import { NewArrivalsCard } from './Productlist'
import { Produclist } from './Productlist'
import '../css/card.css'

const ProductCards = () => {
  return (
    <>
    <section className='container'>
        <h3>BEST SELLER</h3>
        <div className='BestSellerContent'>
            {BestSellerCard.map((BSCard) =>{
            return <BestSeller BSCard={BSCard} key={BSCard.Category} />
        })}
        </div>   
    </section>
    <section className='container'>
    <h3>NEW ARRIVALS</h3>
        <div className="NewArrivalContent">
            {NewArrivalsCard.map((NACard) =>{
            return <NewArrival NACard={NACard} key={NACard.Category} />
        })}
        </div>
    </section>
    <section className='container'>
    <h3>ALL PRODUCTS</h3>
        <div className='ProductListContent'>
            {Produclist.map((productList) =>{
            return <ProductList productList={productList} key={productList.Category} />
        })}
        </div>

    </section>
    </>
  )
}

const BestSeller = ({BSCard: {Image, Model, Rating, Price}}) =>{
    return (
        <>
        <section className="bsCard">
            <img src={Image} alt="" />
            <div className="textBox">
                <h3>{Model}</h3>
                <h4>{Rating}</h4>
                <h4>{Price}</h4>
                <button>Buy Now</button>
            </div>
        </section>
        </>
    )
}
const NewArrival = ({NACard: {Image, Model, Rating, Price}}) =>{
    return (
        <>
        <section className="naCard">
            <img src={Image} alt="" />
            <div className="textBox">
                <h3>{Model}</h3>
                <h4>{Rating}</h4>
                <h4>{Price}</h4>
                <button>Buy Now</button>
            </div>
        </section>
        </>
    )
}
const ProductList = ({productList: {Image, Model, Rating, Price}}) =>{
    return (
        <>
        <section className="plCard">
            <img src={Image} alt="" />
            <div className="textBox">
                <h3>{Model}</h3>
                <h4>{Rating}</h4>
                <h4>{Price}</h4>
                <button>Buy Now</button>
            </div>
        </section>
        </>
    )
}
export default ProductCards