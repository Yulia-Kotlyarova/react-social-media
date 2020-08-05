import React from 'react';
import Post from'./Post.jsx';
import alien from '../../img/alien.svg';
import astronaut from '../../img/astronaut.svg';

import '../../style/App.css';


function MyPosts() {
  return (
    <div>
        <div>
            <textarea autoFocus={true}></textarea>
            <button className = "send-btn"> send </button>
        </div> 
    <Post message = "Hi! I'm pipetka!" ava = {alien} likeCount ='12' />
    <Post message = "It's my first post."ava = {astronaut} likeCount ='13'/>
    </div>
  );
}

export default MyPosts;