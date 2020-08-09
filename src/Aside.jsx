import React from 'react';
import './style/App.css';
import A from './style/Aside.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends';



const AsideLink = (props) => {
  return <li className = "nav-item"> 
             <NavLink to = {props.link} class = {A.nav_link} activeClassName = {A.activeLink}> {props.linkName} </NavLink>
          </li>
}

function Aside(props) {

  let asideLinks = props.linkData.map(el => <AsideLink link = {el.link} linkName = {el.linkName} id = {el.id}/>);

  return (
    <aside className="col-2" >
        <ul className="nav flex-column">
          { asideLinks }

          <Friends dialogsData = { props.dialogsData }/>
              {/* <li className = "nav-item"> 
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
              </li> */}
        </ul>
    </aside>
  );
}

export default Aside;
