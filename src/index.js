import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Footer from './Footer';
import Profile from './Profile';
import Main from'./Main.js';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>

      <Header />
      <Main/>
      <Footer/>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
