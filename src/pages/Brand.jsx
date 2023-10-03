import Header from '../components/Header';
import Footer from '../components/Footer';
import hero from '../assets/images/JPG/Brand/hero.jpg';
import msi from '../assets/images/JPG/Logo/MSI logo.jpg';
import acer from '../assets/images/JPG/Logo/Acer logo.jpg';
import amd from '../assets/images/JPG/Logo/AMD Ryzen logo.png';
import asus from '../assets/images/JPG/Logo/Asus logo.jpg';
import dell from '../assets/images/JPG/Logo/DELL logo.jpg';
import intel from '../assets/images/JPG/Logo/Intel logo.png';
import lenovo from '../assets/images/JPG/Logo/Lenovo logo.jpg';
import '../css/main.css';
import '../css/brand.css';

const Brand = () => {
  return (
    <>
      <Header />
      <div className="body">
        <div className="main">
          <img className="hero" src={hero} alt="Computer" />
          <div className="brand-text">
            <h1>Brands</h1>
            <p>
              To ensure that all products provided by a supplier consistently
              meet high-quality standards, it is essential to begin by
              meticulously selecting suppliers based on their reputation and
              past performance, followed by establishing comprehensive quality
              assurance agreements that clearly define quality specifications,
              inspection procedures, and consequences for substandard
              deliveries; implement a rigorous quality control process, which
              involves regular inspections of received products, periodic audits
              of the supplier's manufacturing processes, and continuous
              evaluation of key performance indicators to measure supplier
              performance and ensure compliance; foster a collaborative
              relationship with suppliers by offering training and support to
              improve their quality control measures and encourage innovation;
              create an effective feedback loop with open communication channels
              to address and resolve quality concerns in a timely manner; and
              finally, consider legal protections and contingency plans to
              mitigate risks and ensure a consistent supply of high-quality
              products.
            </p>
          </div>
          <div className="chips-container">
            <div className='chips'>
              <img src={msi} alt="MSI logo" />
              <img src={acer} alt="Acer logo" />
              <img src={amd} alt="AMD logo" />
              <img src={asus} alt="Asus logo" />
              <img src={dell} alt="DELL logo" />
              <img src={intel} alt="Intel logo" />
              <img src={lenovo} alt="Lenovo logo" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Brand;
