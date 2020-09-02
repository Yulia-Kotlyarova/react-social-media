import React from 'react';
import '../../style/App.css';
import '../../style/Dialog.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return <li className = "nav-item d-flex dialog-item align-items-center"> 
            <img src= {props.ava} alt="" className = "ava-friend"/>
            <NavLink to={path} activeClassName = "active"> {props.name} </NavLink>
        </li>
}

const Message = (props) => {
  return  <li className = "nav-item massage-item"> {props.message} </li>
  }

function Dialog(props) {
  let state = props.dialogsPage ;

  let dialogsItems = state.dialogsData.map(el => <DialogItem ava = {el.ava} name = {el.name} id = {el.id}/>);
  let messagesItem = state.messagesData.map(el => <Message message = {el.message}/>);
  let newMessageText = state.newMessageText;

  const newMessage = React.createRef();
  const sendMessage = () => {
    props.addMessage();
  }

  const onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessage(text);
  }

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
        <div className = "col-6 d-flex flex-column justify-content-between messages">
            <textarea ref = {newMessage} value = { newMessageText }  onChange = { onMessageChange } rows = "5" className = "send-message" autoFocus = {true}> </textarea>
            <button className = "send-btn" onClick = { sendMessage } > send</button>
            <ul className="nav flex-column">
              { messagesItem }
            </ul>
        </div>
      </div>
    </section>
  );
}

export default Dialog;
