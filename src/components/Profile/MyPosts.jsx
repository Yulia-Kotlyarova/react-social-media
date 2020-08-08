import React from 'react';
import Post from'./Post.jsx';
import alien from '../../img/alien.svg';

import '../../style/App.css';

function MyPosts(props) {

  let PostItem = props.postData.map(el => <Post message = {el.message} ava = {alien} likes = {el.likeCount}/> );


  return (
    <div>
        <div>
            <textarea autoFocus={true}></textarea>
            <button className = "send-btn"> send </button>
        </div> 
        { PostItem }
    {/* <Post message = {postData[0].message} ava = {alien} likes = {postData[0].likeCount} />
    <Post message = {postData[1].message} ava = {astronaut} likes = {postData[1].likeCount}/>
    <Post message = {postData[2].message} ava = {astronaut} likes = {postData[2].likeCount}/> */}
    </div>
  );
}

export default MyPosts;