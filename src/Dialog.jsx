import React from 'react';
import './style/App.css';
import './style/Dialog.css';
import m from'./style/Profile.module.css';
import alien from './img/alien.svg';
import astronaut from './img/astronaut.svg';
import { NavLink } from 'react-router-dom';
import Messages from './Messages.jsx'


const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return <li className = "nav-item dialog-item"> 
            <NavLink to={path} activeClassName = "active"> {props.name} </NavLink>
        </li>
}

const Message = (props) => {
return  <li className = "nav-item massage-item"> {props.message} </li>
}

let dialogsData = [
  {id: '1', name: 'Pipetka'},
  {id: '2', name: 'Kykyshka '},
  {id: '3', name: 'Senya'},
  {id: '4', name: 'Fatty Cat'},
  {id: '5', name: 'Murrr'},
]

let messagesData = [
  {id: '1', message: 'Hi!'},
  {id: '2', message: 'Pipetka! '},
  {id: '3', message: 'Pipetka loves you!'},
]

function Dialog() {
  return (
    <section className="col-8">
      <div className = "row">
        <div className = "col-6 dialogs">
          <ul className="nav flex-column">
                  <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
                  <DialogItem name = ' Kykyshka ' id = "2"/>
                  <DialogItem name = ' Senya' id = "3"/>
                  <DialogItem name = ' Fatty Cat' id = "4"/>
                  <DialogItem name = ' Murrr' id = "5"/>
            </ul>
        </div>
            <div className = "col-6 messages">
              <ul className="nav flex-column">
                <Message message = {messagesData[0].message}/>
                <Message message = 'Pipetka!'/>
                <Message message = 'Pipetka loves you!'/>
              </ul>
            </div>

      </div>

    </section>
  );
}

export default Dialog;