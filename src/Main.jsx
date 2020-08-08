import React from 'react';
import './style/App.css';

import Aside from'./Aside.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialog from './components/Dialogs/Dialog.jsx';
import News from './News.jsx';
import Music from './Music.jsx';
import Settings from './Settings.jsx';
import { Route, BrowserRouter } from 'react-router-dom';

function Main(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
            <Aside/>
            {/* <Route exact path ="/dialog" component = {Dialog}/>
            <Route path="/profile" component = {Profile}/> */}
            <Route path ="/dialog" render = { () => <Dialog messagesData = { props.messagesData } dialogsData = {props.dialogsData} /> }/>
            <Route path="/profile" render = { () => <Profile postData = { props.postData }/> }/>
            <Route path="/news" component = {News}/>
            <Route path="/music" component = {Music}/>
            <Route path="/settings" component = {Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main;