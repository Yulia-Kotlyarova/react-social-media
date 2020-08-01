import React from 'react';
import './style/App.css';
import A from './style/Aside.module.css';

function Aside() {
  return (
    <aside className="col-2" >
        <ul className="nav flex-column">
              <li className = "nav-item"> 
                <a href = "#" class = {A.nav_link}> title</a>
              </li>
              <li className = "nav-item"> 
                <a href = "#" class = {`${A.nav_link}`}> title</a>
              </li>
              <li className = "nav-item"> 
                <a href = "#" class = {A.nav_link}> title</a>
              </li>
              <li className = "nav-item"> 
                <a href = "#" class = {A.nav_link}> title</a>
              </li>
        </ul>
    </aside>
  );
}

export default Aside;