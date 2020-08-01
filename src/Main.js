import React from 'react';
import './style/App.css';

import Aside from'./Aside.js';
import Profile from './Profile';
import Dialog from './Dialog';
import News from './News';
import Music from './Music';
import Settings from './Settings';
import { Route, BrowserRouter } from 'react-router-dom';


function Main() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
            <Aside/>
            <Route path ="/dialog" component = {Dialog}/>
            <Route path="/profile" component = {Profile}/>
            <Route path="/news" component = {News}/>
            <Route path="/music" component = {Music}/>
            <Route path="/settings" component = {Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main;