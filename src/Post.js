import React from 'react';
import './style/App.css';
import './style/Post.css';
import m from'./style/Profile.module.css';
import astronaut from './img/astronaut.svg';

function Post(props) {
  return (
    <div className = "d-flex post-box">
       <img src= {props.ava} className={m.ava} alt="ava" />
       <div className = "post-box-p" >
            <p> {props.message}</p> 
            <span> like </span>  
        </div> 
    </div>
  );
}

export default Post;