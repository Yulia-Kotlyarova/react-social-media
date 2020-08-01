import React from 'react';
import './style/App.css';
import m from'./style/Main.module.css';
import Aside from'./Aside.js';
import Post from'./Post.js';
import MyPosts from'./MyPosts.js';
import astronaut from './img/astronaut.svg';

function Main() {
  return (
      <div className="container">
        <div className="row">
            <Aside/>
            <main className="col-8">
              <div class="person-box">
                <div class="ava d-flex">
                  <img src= {astronaut} className={m.ava} alt="ava" />
                  <p class={m.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Porro ratione soluta magnam eum reprehenderit, natus cumque ab necessitatibus tempora 
                  dolorum fugiat rem, ut architecto! 
                  Vitae possimus nesciunt ex voluptas. Quos!</p>
                </div>
              </div>
              <MyPosts/>
            </main>
        </div>
      </div>
  );
}

export default Main;