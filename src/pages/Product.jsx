import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/main.css';
import Filter from '../components/Filter';

const Product = () => {
  return (
    <>
      <Header />
      <div className="body">
        <div className="main">
          <section className="productContainer">
            <div className='filterContainer'>
              <Filter/>
            </div>
            <div className='cardContainer'>

            </div>
          </section> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
