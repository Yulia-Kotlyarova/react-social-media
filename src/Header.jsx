import React from 'react';
import logo from './img/logo.svg';
import './style/App.css';

function Header() {
  return (
    <div className="Header">
      <header className="">
        <div className="container">
          {/* <div className="row">
            <ul className="col-12 nav justify-content-center">
              <li className = "nav-item"> 
                <a href = "#" className = "nav-link active"> title</a>
              </li>
              <li className = "nav-item"> 
                <a href = "#" className = "nav-link"> title</a>
              </li>
              <li className = "nav-item"> 
                <a href = "#" className = "nav-link"> title</a>
              </li>
              <li className = "nav-item"> 
                <a href = "#" className = "nav-link"> title</a>
              </li>
            </ul>
          </div> */}
        </div>
          <img src={logo} className="Header-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Header;
