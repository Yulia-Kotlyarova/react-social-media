import React from 'react';
import './style/App.css';

import Aside from'./Aside.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogContainer from './components/Dialogs/DialogContainer.jsx';
import News from './News.jsx';
import Music from './Music.jsx';
import Settings from './Settings.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import AsideContainer from './AsideContainer';

function Main(props) {
  debugger
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
            <AsideContainer linkData = { props.linkData } dialogsData = {props.dialogsData} />
            {/* <Route exact path ="/dialog" component = {Dialog}/>
            <Route path="/profile" component = {Profile}/> */}
            <Route path ="/dialog" render = { () => <DialogContainer store ={ props.store }/> }/>
            <Route path="/profile" render = { () => <Profile store ={ props.store }/> }/>
            <Route path="/news" component = {News}/>
            <Route path="/music" component = {Music}/>
            <Route path="/settings" component = {Settings}/>
            {/* <Route path="/friends" render = { () => <Friends dialogsData = {props.dialogsData} /> }/> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main;
