import React from 'react';
import './style/App.css';
import m from'./style/Profile.module.css';
import Aside from'./Aside.js';
import Post from'./Post.js';
import MyPosts from'./MyPosts.js';
import astronaut from './img/astronaut.svg';

function Profile() {
  return (
    <section className="col-8">
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
    </section>
  );
}

export default Profile;