import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import * as serviceWorker from './serviceWorker';
import Footer from './Footer.jsx';
import Profile from './components/Profile/Profile.jsx';
import Main from'./Main.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

import monster from './img/angry-monster.svg';
import eye from './img/eye-open.svg';
import jelly from './img/jellyfish.svg';
import unity from './img/unity-hand.svg';
import cat from './img/cat-face.svg';


let messagesData = [
  {id: '1', message: 'Hi!'},
  {id: '2', message: 'Pipetka! '},
  {id: '3', message: 'Pipetka loves you!'},
]

let dialogsData = [
  {id: '1', name: 'Pipetka', ava: `${monster}`},
  {id: '2', name: 'Kykyshka ', ava: `${eye}`},
  {id: '3', name: 'Senya', ava: `${jelly}`},
  {id: '4', name: 'Fatty Cat', ava: `${unity}`},
  {id: '5', name: 'Murrr', ava: `${cat}`},
]

let postData = [
  {id: '1', message: 'Hi! I am pipetka!', likeCount: '12' },
  {id: '2', message: "It's my first post.", likeCount: '13' },
  {id: '3', message: 'Pipetka loves you!', likeCount: '69' },
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Main postData ={ postData } messagesData = { messagesData } dialogsData = { dialogsData } />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
// export { dialogsData, dialogsItems };