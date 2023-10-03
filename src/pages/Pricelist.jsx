import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import { Price } from '../components/Price';
import price from '../json/price.json';
import '../css/main.css';
import '../css/pricelist.css';

const Pricelist = () => {
  return (
    <>
      <div className="body">
        <Header />
        <div className="main">
          <section className="productContainer">
            <h1>Pricelist</h1>
            <div className="filterContainer">
              <Filter />
            </div>
            <div className="cardContainer border">
              <div className='header-container'>
                <h4>Category</h4>
                <h4>Brand</h4>
                <h4>Product Name</h4>
                <h4>Price</h4>
              </div>
              <Price price={price} />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Pricelist;
