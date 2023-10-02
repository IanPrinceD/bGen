import byteGenius from '../assets/images/PNG/Product/byteGenius.png';
import '../css/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>customer service</h4>
          <ul className="links">
            <li>
              <a href="#">Cancellation Policy</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Order and Payments</a>
            </li>
            <li>
              <a href="#">Return and Refund</a>
            </li>
            <li>
              <a href="#">Warranty Information</a>
            </li>
            <li>
              <a href="#">Terms and Condition</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>company</h4>
          <ul className="links">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Company</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>follow us</h4>
          <ul className="links">
            <li className="socials">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="socials">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="socials">
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <a href="/">
          <img src={byteGenius} alt="Byte Genius" />
        </a>
      </div>
      <p className="copyright">&copy 2023. all rights reserved.</p>
    </footer>
  );
};

export default Footer;
