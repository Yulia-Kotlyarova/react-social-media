import * as serviceWorker from './serviceWorker';
import store from './components/data/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from'./Main.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';
//import { addPost, addMessage, updateNewPost, updateNewMessage, subscribe } from './components/data/state';


let renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Header/>
        <StoreContext.Provider value = { store }>
          <Main/>
          <Footer/>
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  renderTree(state);
});

serviceWorker.unregister();
