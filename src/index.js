import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import * as serviceWorker from './serviceWorker';
import Footer from './Footer.jsx';
import Profile from './components/Profile/Profile.jsx';
import Main from'./Main.jsx';
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
