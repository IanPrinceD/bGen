import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/main.css';
import { Carousel } from '../components/Carousel';
import { Coupons } from '../components/Coupons';
import { Payments } from '../components/Payments';
import { Featured } from '../components/Featured';
import { Components} from '../components/Components'
import {Laptop} from '../components/Laptop'
import slides from '../json/slides.json';
import coupons from '../json/coupons.json';
import payments from '../json/payments.json';
import featured from '../json/featured.json';
import components from '../json/desktop.json'
import laptop from '../json/laptop.json'

const Home = () => {
  return (
    <>
      <div className="body">
        <Header />
        <div className="main">
          <section className="carousels-container">
            <Carousel slides={slides} />
          </section>
          <section className="computer-container">
            <div className="desktops-container">
              <article className="desktop-container">
                <h2 className="desktop-text">Desktop Components</h2>
                <div className='desktop-holder'>
                  <Components components={components}/>
                </div>
              </article>
            </div>
            <div className="laptops-container">
              <article className="laptop-container">
                <h2 className="laptop-text">Laptop</h2>
                <div className='laptop-holder'>
                  <Laptop laptop={laptop} />
                </div>
              </article>
            </div>
          </section>
          <section className="coupons-container">
            <Coupons coupons={coupons} />
          </section>
          <section className='flash-sale-container'>
            <h2 className='flash-sale-container-text'>Flash Sale
            </h2>
            <Featured featured={featured}/>
          </section>
          <section className="payments-container">
            <Payments payments={payments} />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
