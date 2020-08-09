import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import * as serviceWorker from './serviceWorker';
import Footer from './Footer.jsx';
import Main from'./Main.jsx';
import { BrowserRouter } from 'react-router-dom';
import state from './components/data/state';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Main postData ={ state.postData } messagesData = { state.messagesData } dialogsData = { state.dialogsData } linkData = {state.linkData} />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
