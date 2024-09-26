
import {LOGO_URL} from "../utils/constant"
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');

  return (
    <div className="header">
      <div className="header__logo">
       <img src="/Hot Red Illustrative Burger Food Logo.jpg" alt ="Restaurant logo" className="logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/" className="home">Home</Link></li>
          <li><Link to="/about" className="about">About Us</Link></li>
          <li><Link to="/contact-us" className="contact">Contact Us</Link></li>
          <li className="cart">Cart</li>
          <button className="login-btn" onClick={() => {
            setLoginBtn(loginBtn === 'Login' ? 'Logout' : 'Login');
          }}>{loginBtn}</button>
          <button className="signup-btn">Signup</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;