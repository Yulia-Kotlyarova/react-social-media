import React from 'react';
import './style/App.css';

function Aside() {
  return (
    <aside className="col-4">
        <ul className="nav flex-column">
              <li className = "nav-item"> 
                <a href = "#" class = "nav-link active"> title</a>
              </li>
              <li className = "nav-item"> 
                <a href = "#" class = "nav-link"> title</a>
              </li>
              <li className = "nav-item"> 
                <a href = "#" class = "nav-link"> title</a>
              </li>
              <li className = "nav-item"> 
                <a href = "#" class = "nav-link"> title</a>
              </li>
        </ul>
    </aside>
  );
}

export default Aside;