import React from 'react';
import './style/App.css';
import './style/Dialog.css';
import m from'./style/Profile.module.css';
import alien from './img/alien.svg';
import astronaut from './img/astronaut.svg';
import { NavLink } from 'react-router-dom';
import Messages from './Messages.js'

function Dialog() {
  return (
    <section className="col-8">
      <div className = "row">
        <div className = "col-6 dialogs">
          <ul className="nav flex-column">
                  <li className = "nav-item dialog-item"> 
                    <NavLink to = "dialog/Pipetka" class = "active"  activeClassName = "active"> Pipetka </NavLink>
                  </li>
                  <li className = "nav-item dialog-item"> 
                    <NavLink to = "dialog/Kykyshka" class = ""  activeClassName = "active"> Kykyshka </NavLink>
                  </li>
                  <li className = "nav-item dialog-item"> 
                    <NavLink to = "dialog/Senya" class = ""  activeClassName = "active"> Senya </NavLink>
                  </li>
                  <li className = "nav-item dialog-item"> 
                    <NavLink to = "dialog/Fatty Cat" class = ""  activeClassName = "active"> Fatty Cat </NavLink>
                  </li>
                  <li className = "nav-item dialog-item"> 
                    <NavLink to = "dialog/Murrr" class = ""  activeClassName = "active"> Murrr </NavLink>
                  </li>
            </ul>
        </div>
        <Messages/>
      </div>

    </section>
  );
}

export default Dialog;