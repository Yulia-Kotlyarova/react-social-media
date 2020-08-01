import React from 'react';
import './style/App.css';
import A from './style/Aside.module.css';

function Aside() {
  return (
    <aside className="col-2" >
        <ul className="nav flex-column">
              <li className = "nav-item"> 
                <a href = "/profile" class = {A.nav_link}> profile </a>
              </li>
              <li className = "nav-item"> 
                <a href = "/dialog" class = {`${A.nav_link}`}> messages </a>
              </li>
              <li className = "nav-item"> 
                <a href = "/news" class = {A.nav_link}> news </a>
              </li>
              <li className = "nav-item"> 
                <a href = "/music" class = {A.nav_link}> music </a>
              </li>
              <li className = "nav-item"> 
                <a href = "/settings" class = {A.nav_link}> settings </a>
              </li>
        </ul>
    </aside>
  );
}

export default Aside;