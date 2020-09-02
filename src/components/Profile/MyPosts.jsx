import React from 'react';
import Post from'./Post.jsx';
import alien from '../../img/alien.svg';

import '../../style/App.css';
import { addPostActCreator, onPostChangeActCreator } from '../data/profile-reducer';

function MyPosts(props) {
  const PostItem = props.postData.map(el => <Post message = {el.message} ava = {alien} likes = {el.likeCount}/> );

  const newPost = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let newText = newPost.current.value;
    props.updateNewPost(newText);
  }

  return (
    <div>
        <div>
                <textarea ref = { newPost } value = { props.newPostText } onChange = { onPostChange } autoFocus={true}/>
                <button className = "send-btn" onClick = { onAddPost } > send </button>

        </div> 
        { PostItem }
    {/* <Post message = {postData[0].message} ava = {alien} likes = {postData[0].likeCount} />
    <Post message = {postData[1].message} ava = {astronaut} likes = {postData[1].likeCount}/>
    <Post message = {postData[2].message} ava = {astronaut} likes = {postData[2].likeCount}/> */}
    </div>
  );
}

export default MyPosts;
