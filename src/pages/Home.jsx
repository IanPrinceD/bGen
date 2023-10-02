import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/main.css';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <>
      <Header />
      <div className="body">
        <div className="main">
          <section className="carousel-container">
            <Carousel />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
