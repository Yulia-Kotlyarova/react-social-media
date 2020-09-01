import React from 'react';
import '../../style/App.css';
import '../../style/Dialog.css';
import Dialog from './Dialog';
import { NavLink } from 'react-router-dom';
import { sendMessageActCreator, onMessageChangeActCreator} from '../data/dialog-reducer';
import { Provider, connect } from 'react-redux';

// function DialogContainer() {
//   debugger
//   return (
//     <Provider.Consumer> 
//       {
//         (store) => {
//           let state = store.getState().dialogsPage ;

//           const sendMessage = () => {
//             store.dispatch(sendMessageActCreator());
//           }
        
//           const onMessageChange = (text) => {
//             store.dispatch(onMessageChangeActCreator(text))
//           }

//           return  <Dialog updateNewMessage = { onMessageChange }
//                     addMessage = {sendMessage}  
//                     dialogsPage = { state }
//                     />;
//         }
//       }
//       </Provider.Consumer> 
//   )
// }

let mapStateToProps = (state) => { // SEND OBJECT
  return {
    dialogsPage: state.dialogsPage
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