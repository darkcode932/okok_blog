import React, {useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
//import logo from '../../assets/logo.svg';

const Navbar = () => {
  

  const[toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className="okok__navbar">
      <div className="okok__navbar-links">
        <div className="okok__navbar-links_logo">
            <h1>OKOK</h1>
        </div>
        <div className="okok__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wokok">What is OKOK</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="okok__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="okok__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick = {() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="okok__navbar-menu_container scale-up-center">
              <div className="okok__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#wokok">What is OKOK</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>
              </div>
              <div className="okok__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;