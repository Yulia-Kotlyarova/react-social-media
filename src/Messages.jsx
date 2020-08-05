import React from 'react';
import './style/App.css';
import Dialog from './Dialog.jsx';

import { NavLink } from 'react-router-dom';

function Messages(props) {
  return (
    <div className = "col-6 messages">
    <ul className="nav flex-column">
            <li className = "nav-item massage-item"> 
              {props.message}
            </li>
            <li className = "nav-item massage-item"> 
            {props.message}
            </li>
            <li className = "nav-item massage-item"> 
            {props.message}
            </li>
            <li className = "nav-item massage-item"> 
            {props.message}
            </li>
            <li className = "nav-item massage-item"> 
            {props.message}
            </li>
      </ul>
  </div>
  );
}

export default Messages;