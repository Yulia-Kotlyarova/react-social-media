import React from 'react';
import Post from'./Post.jsx';
import alien from '../../img/alien.svg';

import '../../style/App.css';

function MyPosts(props) {

  const PostItem = props.postData.map(el => <Post message = {el.message} ava = {alien} likes = {el.likeCount}/> );

  const newPost = React.createRef();

  const addPost = () => {
    // let text = newPost.current.value;
    props.dispatch({ type: 'ADD POST' });
    // props.updateNewPost('');
  }

  const onPostChange = () => {
    let newText = newPost.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', text: newText });
    // props.dispatch(action);
  }

  return (
    <div>
        <div>
                <textarea ref = { newPost } value = { props.newPostText } onChange = { onPostChange } autoFocus={true}/>
                <button className = "send-btn" onClick = { addPost } > send </button>

        </div> 
        { PostItem }
    {/* <Post message = {postData[0].message} ava = {alien} likes = {postData[0].likeCount} />
    <Post message = {postData[1].message} ava = {astronaut} likes = {postData[1].likeCount}/>
    <Post message = {postData[2].message} ava = {astronaut} likes = {postData[2].likeCount}/> */}
    </div>
  );
}

export default MyPosts;