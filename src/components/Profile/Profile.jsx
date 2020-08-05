import React from 'react';
import '../../style/App.css';
import MyPosts from'./MyPosts.jsx';
import ProfileInfo from './ProfileInfo.jsx';
import astronaut from '../../img/astronaut.svg';

function Profile() {
  return (
    <section className="col-8">
      <ProfileInfo/>
      <MyPosts/>
    </section>
  );
}

export default Profile;