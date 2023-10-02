import React from 'react';
import byteGenius from '../assets/images/PNG/Product/byteGenius.png';
import '../css/header.css';

function Header() {
  return (
    <header className="nav-bar">
      <nav className="nav">
        <i className="fa-solid fa-bars navOpenBtn"></i>
        <a href="/" className="logo">
          <img src={byteGenius} alt="Byte Genius" />
        </a>
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">
              <i className="fa-solid fa-truck"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-regular fa-circle-user"></i>
            </a>
          </li>
          <i className="fa-regular fa-circle-user user-icon"></i>
          <i className="fa-solid fa-magnifying-glass search-icon search-icon-icon"></i>
        </ul>
      </nav>
      {/*  pages navigation */}
      <ul className="nav-links">
        <i className="fa-regular fa-circle-xmark navCloseBtn"></i>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/product">PRODUCT</a>
        </li>
        <li>
          <a href="/brand">BRAND</a>
        </li>
        <li>
          <a href="/pricelist">PRICELIST</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
