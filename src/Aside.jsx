import React from 'react';
import './style/App.css';
import A from './style/Aside.module.css';
import { NavLink } from 'react-router-dom';

function Aside() {
  return (
    <aside className="col-2" >
        <ul className="nav flex-column">
              <li className = "nav-item"> 
                <NavLink to = "/profile" class = {A.nav_link} activeClassName = {A.activeLink}> profile </NavLink>
              </li>
              <li className = "nav-item"> 
                <NavLink to = "/dialog" class = {`${A.nav_link}`} activeClassName = {A.activeLink}> messages </NavLink>
              </li>
              <li className = "nav-item"> 
                <NavLink to = "/news" class = {A.nav_link} activeClassName = {A.activeLink}> news </NavLink>
              </li>
              <li className = "nav-item"> 
                <NavLink to = "/music" class = {A.nav_link} activeClassName = {A.activeLink}> music </NavLink>
              </li>
              <li className = "nav-item"> 
                <NavLink to = "/settings" class = {A.nav_link} activeClassName = {A.activeLink}> settings </NavLink>
              </li>
        </ul>
    </aside>
  );
}

export default Aside;