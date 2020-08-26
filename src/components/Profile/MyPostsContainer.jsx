import React from 'react';
import { addPostActCreator, onPostChangeActCreator } from '../data/profile-reduser';
import MyPosts from './MyPosts';

function MyPostsContainer(props) {
    debugger

  let state = props.store.getState();
  const addPost = () => {
    props.store.dispatch(addPostActCreator());
  }

  const onPostChange = (newText) => {
    let action = onPostChangeActCreator(newText);
    props.store.dispatch(action);
  }

  return ( <MyPosts updateNewPost = { onPostChange }  addPost = { addPost } postData = { state.profilePage.postData }  newPostText ={ state.profilePage.newPostText }/> );
}

export default MyPostsContainer;
