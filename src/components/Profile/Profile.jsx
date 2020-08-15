import React from 'react';
import '../../style/App.css';
import MyPosts from'./MyPosts.jsx';
import ProfileInfo from './ProfileInfo.jsx';

function Profile(props) {
  return (
    <section className="col-8">
      <ProfileInfo/>
      <MyPosts postData = { props.postData }  newPostText ={ props.newPostText } addPost = { props.addPost } updateNewPost = { props.updateNewPost } />
    </section>
  );
}

export default Profile;