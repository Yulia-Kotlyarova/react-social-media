import React from 'react';
import '../../style/App.css';

const Message = (props) => {
  return  <li className = "nav-item massage-item"> {props.message} </li>
  }

function Messages(props) {

  const newMessage = React.createRef();

  const sendMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }

  let messagesItem = props.messagesData.map(el => <Message message = {el.message}/>); 

  return (
    <div className = "col-6 d-flex flex-column justify-content-between messages">
      <textarea ref = {newMessage} rows = "5" className = "send-message" autoFocus = {true}> </textarea>
      <button className = "send-btn" onClick = { sendMessage } > send</button>
      <ul className="nav flex-column">
        { messagesItem }
      </ul>
    </div>
  );
}

export default Messages;
