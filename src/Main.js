import React from 'react';
import './style/App.css';
import './style/Main.css';
import Aside from './Aside';

function Main() {
  return (
      <div className="container">
        <div className="row">
            <Aside/>
            <main className="col-4">
            
            </main>
        </div>
      </div>
  );
}

export default Main;