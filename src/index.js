import * as serviceWorker from './serviceWorker';
import store from './components/data/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from './HeaderContainer.jsx';
import Footer from './Footer.jsx';
import Main from'./Main.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';// allows UI to get a state

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = { store }>
        <HeaderContainer/>
        <Main/>
        <Footer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// store.subscribe( () => {
//   let state = store.getState();   // CONNECT() CONTAINS SUBSCRIBE NOW
//   renderTree(state);
// });

serviceWorker.unregister();
