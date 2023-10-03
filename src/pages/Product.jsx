import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/main.css';
import Filter from '../components/Filter';
import ProductCards from '../components/ProductCards';

const Product = () => {
  return (
    <>
      <Header />
      <div className="body">
        <div className="main">
          <section className="productContainer">
            <h1>Products</h1>
            <div className='filterContainer'>
              <Filter/>
            </div>
            <div className='cardContainer'>
              <ProductCards/>
            </div>
          </section> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
