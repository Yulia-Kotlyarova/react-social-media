import * as serviceWorker from './serviceWorker';
import store from './components/data/state'

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from'./Main.jsx';
import { BrowserRouter } from 'react-router-dom';
//import { addPost, addMessage, updateNewPost, updateNewMessage, subscribe } from './components/data/state';


let renderTree = (state) => {
    debugger
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Header />
       
        <Main 
            state = { state }
            postData ={ state.profilePage.postData } 
            newPostText ={ state.profilePage.newPostText }
            // updateNewPost = { store.updateNewPost.bind(store) }
            dispatch = { store.dispatch.bind(store) }

            messagesData = { state.dialogsPage.messagesData } 
            dialogsData = { state.dialogsPage.dialogsData }
            newMessageText = { state.dialogsPage.newMessageText } 
            // updateNewMessage = { store.updateNewMessage.bind(store) }
            // addMessage = { store.addMessage.bind(store) }

            linkData = {state.linkData} />

        <Footer/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderTree(store.getState());

store.subscribe(renderTree);

serviceWorker.unregister();
