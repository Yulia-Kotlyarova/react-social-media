import React from 'react';
import '../../style/App.css';
import '../../style/Dialog.css';
import Dialog from './Dialog';
import { NavLink } from 'react-router-dom';
import { sendMessageActCreator, onMessageChangeActCreator} from '../data/dialog-reducer';
import StoreContext from '../../StoreContext';

function DialogContainer() {
  debugger
  return (
    <StoreContext.Consumer> 
      {
        (store) => {
          let state = store.getState().dialogsPage ;

          const sendMessage = () => {
            store.dispatch(sendMessageActCreator());
          }
        
          const onMessageChange = (text) => {
            store.dispatch(onMessageChangeActCreator(text))
          }

          return  <Dialog updateNewMessage = { onMessageChange }
                    addMessage = {sendMessage}  
                    dialogsPage = { state }
                    />;
        }
      }
      </StoreContext.Consumer> 
  )
}

export default DialogContainer;