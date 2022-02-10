import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [Button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  });
 
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Boutique  <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <ul/>
            <ul/>
            <ul/>
            <li className="nav-item">
              <Link to="/Sezon" className="nav-links" onClick={closeMobileMenu}>
                Yeni Sezon
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Ug"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Üst Giyim
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Ag"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Alt Giyim
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Sezson"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sezon Sonu 
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Blog"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                İletişim
              </Link>
            </li>
            
            <li className="nav-item">
              
              <Link style={{position:"relative",left:280}}
                to="/Sepet"
                className="nav-links"
                onClick={closeMobileMenu}
                
              >
                <span style={{position:"relative",left:15,bottom:10,color:"",fontSize:15}} >0</span>
                🛒
              </Link>
            </li>
            <li className="nav-item">
              <Link style={{position:"relative",left:260}}
                to="/Hesap"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                🚹
              </Link>
            </li>
            <li className="nav-item">
              <Link style={{position:"relative",left:120}}
                to="/Arama"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                🔎
              </Link>
              
            </li>
            
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
