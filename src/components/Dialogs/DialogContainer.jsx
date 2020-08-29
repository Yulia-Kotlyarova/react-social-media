import React from 'react';
import '../../style/App.css';
import '../../style/Dialog.css';
import Dialog from './Dialog';
import { NavLink } from 'react-router-dom';
import { sendMessageActCreator, onMessageChangeActCreator} from '../data/dialog-reducer';

function DialogContainer(props) {
  debugger
  let state = props.store.getState().dialogsPage ;

  const newMessage = React.createRef();
  const sendMessage = () => {
    props.store.dispatch(sendMessageActCreator());
  }

  const onMessageChange = (text) => {
    props.store.dispatch(onMessageChangeActCreator(text))
  }

  return <Dialog updateNewMessage = { onMessageChange }
  addMessage = {sendMessage}  
  dialogsPage = { state }
  />;
}

export default DialogContainer;