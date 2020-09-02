import React from 'react';
import '../../style/App.css';
import MyPostsContainer from'./MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo.jsx';

function Profile(props) {
  return (
    <section className="col-8">
      <ProfileInfo/>
      <MyPostsContainer store ={ props.store } />
    </section>
  );
}

export default Profile;