import React from 'react';
import logo from './img/logo.svg';
import './style/App.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
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
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="login-block">
                {props.isAuth ? props.login : <NavLink to = {'/login'}> <p>Login</p> </NavLink>}
              </div>
              <img src={logo} className="Header-logo" alt="logo" />
            </div>
          </div>
        </div>


      </header>
    </div>
  );
}

export default Header;
