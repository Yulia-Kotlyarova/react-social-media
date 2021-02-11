import React from 'react';
import '../../style/App.css';
import MyPostsContainer from'./MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo.jsx';

function Profile(props) {

  return (
    <section className="col-8">
      <ProfileInfo 
        isAuth = { props.isAuth } 
        profile = { props.profile }
        status = { props.status }
        upDateStatus = { props.upDateStatus }
      />

      <MyPostsContainer store ={ props.store } profile = { props.profile }/>
    </section>
  );
}

export default Profile;