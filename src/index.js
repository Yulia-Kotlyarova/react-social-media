import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Footer from './Footer';
import Main from './Main';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
