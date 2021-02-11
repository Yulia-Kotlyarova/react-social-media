import React from 'react';
import { addPostActCreator, onPostChangeActCreator } from '../data/profile-reducer';
import MyPosts from './MyPosts';
import { Provider, connect } from 'react-redux';

// function MyPostsContainer() {
//     debugger

//   return ( 
//     <Provider.Consumer> 
//       {
//         (store) => {
//           let state = store.getState();

//           const addPost = () => {
//             store.dispatch(addPostActCreator());
//           }
        
//           const onPostChange = (newText) => {
//             let action = onPostChangeActCreator(newText);
//             store.dispatch(action);
//           }

//           return <MyPosts updateNewPost = { onPostChange }
//           addPost = { addPost }
//           postData = { state.profilePage.postData }
//           newPostText ={ state.profilePage.newPostText }/> 
//         }
//       }
//     </Provider.Consumer>
//   );
// }
let mapStateToProps = (state) => { // SEND OBJECT, LAUNCHES WITH ANY STATE'S CHANGE
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => { // SEND FUNCTIONS
  return {
    updateNewPost: (newText) => {
      let action = onPostChangeActCreator(newText);
      dispatch(action);
    },
    addPost: (newPost) => dispatch(addPostActCreator(newPost))
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
