import React from 'react';
import './style/App.css';
import A from './style/Aside.module.css';
import { NavLink } from 'react-router-dom';

const AsideLink = (props) => { // links
  return <li className = "nav-item"> 
             <NavLink to = {props.link} className = {A.nav_link} activeClassName = {A.activeLink}> {props.linkName} </NavLink>
          </li>
}

const DialogItem = (props) => {  // friends
  return <a className = " col-4 friend-ava"> 
            <img src= {props.ava} alt="props.name" className = "ava-friend"/>
        </a>
}

function Aside(props) {

  const asideLinks = props.linkData.map(el => <AsideLink link = {el.link} linkName = {el.linkName} id = {el.id}/>);
  const friendItems = props.dialogsData.map(el => <DialogItem ava = {el.ava} name = {el.name} id = {el.id}/>);

  return (
    <aside className="col-2" >
        <ul className="nav flex-column">
          { asideLinks }

        <div className="row justify-content-around friends-box">
          { friendItems }
        </div>
        </ul>
    </aside>
  );
}

export default Aside;
