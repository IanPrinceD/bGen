import React, { useContext } from 'react'
import { BestSellerCard } from './Productlist'
import { NewArrivalsCard } from './Productlist'
import { Produclist } from './Productlist'
// import {ReactContext, ByteGenius} from '../Context/ReactContext'
import '../css/card.css'

const ProductCards = () => {
    // const getBSProduct = (id) =>{
    //     const BSCard = BestSellerCard.find((BSCard) => BSCard.id === id)
    //     console.log(BSCard);
    // }

  return (
    <>
    <section className='container'>
        <h3>BEST SELLER</h3>
        <div className='BestSellerContent'>
            {BestSellerCard.map((BSCard) =>{
            return <BestSeller {...BSCard} key={BSCard.id}/>
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

const BestSeller = (props) =>{
    const {Image, Model, Rating, Price} = props
    // const {newFunction, newProduct} = useContext(ByteGenius)
    // console.log(number);
    // // const getSingleProduct = () =>{
    // //     getBSProduct(id)
    // // }
    return (
        <>
        {/* <ReactContext> */}
        <section className="bsCard">
            <img src={Image} alt="" />
            <div className="textBox">
                <h3>{Model}</h3>
                <h4>{Rating}</h4>
                <p>{Price}</p>
                <div className="buttonIcon">
                    <a href="/BuyNow"><button type='submit' name='submit'>Buy Now</button></a>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-heart"></i>
                </div>
            </div>
        </section>
        {/* </ReactContext> */}
        {/* onClick={() => newFunction(id)} */}
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
                <p>{Price}</p>
                <div className="e-btn">
                    <button>Buy Now</button>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-heart"></i>
                </div>
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
                <p>{Price}</p>
                <div className="buttonIcon">
                    <button>Buy Now</button>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-heart"></i>
                </div>
            </div>
        </section>
        </>
    )
}
export default ProductCards