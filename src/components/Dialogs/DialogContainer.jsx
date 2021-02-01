import React from 'react';
import '../../style/App.css';
import '../../style/Dialog.css';
import Dialog from './Dialog';
import { NavLink } from 'react-router-dom';
import { sendMessageActCreator, onMessageChangeActCreator} from '../data/dialog-reducer';
import { Provider, connect } from 'react-redux';

let mapStateToProps = (state) => { // SEND OBJECT
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => { // SEND FUNCTIONS
  return {
    updateNewMessage: (text) => dispatch(onMessageChangeActCreator(text)),
    addMessage: () => dispatch(sendMessageActCreator())
  }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;