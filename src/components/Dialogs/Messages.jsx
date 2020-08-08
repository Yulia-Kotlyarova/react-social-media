import React from 'react';
import '../../style/App.css';
import Dialog from './Dialog.jsx';

import { NavLink } from 'react-router-dom';

const Message = (props) => {
  return  <li className = "nav-item massage-item"> {props.message} </li>
  }

  // let messagesData = [
  //   {id: '1', message: 'Hi!'},
  //   {id: '2', message: 'Pipetka! '},
  //   {id: '3', message: 'Pipetka loves you!'},
  // ]
  
 

function Messages(props) {

  let messagesItem = props.messagesData.map(el => <Message message = {el.message}/>); 

  return (
      <ul className="nav flex-column">
        { messagesItem }
      </ul>
  );
}

export default Messages;