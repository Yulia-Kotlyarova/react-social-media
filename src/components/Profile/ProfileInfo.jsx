import React from 'react';
import '../../style/App.css';
import m from'../../style/Profile.module.css';
import astronaut from '../../img/astronaut.svg';

function ProfileInfo() {
  return (
      <div class="person-box">
        <div class="ava d-flex">
          <img src= {astronaut} className={m.ava} alt="ava" />
          <p class={m.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Porro ratione soluta magnam eum reprehenderit, natus cumque ab necessitatibus tempora 
          dolorum fugiat rem, ut architecto! 
          Vitae possimus nesciunt ex voluptas. Quos!</p>
        </div>
      </div>
  );
}

export default ProfileInfo;