import React from 'react';
import '../../style/App.css';
import '../../style/Dialog.css';
import Dialog from './Dialog';
import { sendMessageActCreator, onMessageChangeActCreator} from '../data/dialog-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirectComponent } from '../hoc/AuthRedirect';

let mapStateToProps = (state) => { // SEND OBJECT
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => { // SEND FUNCTIONS
  return {
    updateNewMessage: (text) => dispatch(onMessageChangeActCreator(text)),
    addMessage: () => dispatch(sendMessageActCreator())
  }
}

const DialogRedirectComponent = withAuthRedirectComponent(Dialog); // HOC for redirect

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(DialogRedirectComponent);

export default DialogContainer;