import React from 'react';
import '../../style/App.css';
import '../../style/Dialog.css';
import  Messages from './Messages.jsx';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return <li className = "nav-item d-flex dialog-item align-items-center"> 
            <img src= {props.ava} alt="" className = "ava-friend"/>
            <NavLink to={path} activeClassName = "active"> {props.name} </NavLink>
        </li>
}

function Dialog(props) {

  let dialogsItems = props.dialogsData.map(el => <DialogItem ava = {el.ava} name = {el.name} id = {el.id}/>);

  return (
    <section className="col-8">
      <div className = "row">
        <div className = "col-6 dialogs">
          <ul className="nav flex-column">
            { dialogsItems }
                  {/* <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
                  <DialogItem name = ' Kykyshka ' id = "2"/>
                  <DialogItem name = ' Senya' id = "3"/>
                  <DialogItem name = ' Fatty Cat' id = "4"/>
                  <DialogItem name = ' Murrr' id = "5"/> */}
            </ul>
        </div>
            <Messages messagesData = { props.messagesData } newMessageText = { props.newMessageText } dispatch = { props.dispatch } />
      </div>
    </section>
  );
}

export default Dialog;
