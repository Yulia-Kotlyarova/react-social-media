import React from 'react';
import { addPostActCreator, onPostChangeActCreator } from '../data/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../StoreContext';

function MyPostsContainer() {
    debugger

  return ( 
    <StoreContext.Consumer> 
      {
        (store) => {
          let state = store.getState();

          const addPost = () => {
            store.dispatch(addPostActCreator());
          }
        
          const onPostChange = (newText) => {
            let action = onPostChangeActCreator(newText);
            store.dispatch(action);
          }

          return <MyPosts updateNewPost = { onPostChange }
          addPost = { addPost }
          postData = { state.profilePage.postData }
          newPostText ={ state.profilePage.newPostText }/> 
        }
      }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
