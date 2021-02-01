import React from 'react';
import '../../style/App.css';
import MyPostsContainer from'./MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo.jsx';
import { Redirect } from 'react-router-dom';

function Profile(props) {
  if(!props.isAuth) {
    return <Redirect to = {'/login'}/>
  }

  return (
    <section className="col-8">
      <ProfileInfo isAuth = {props.isAuth} profile = {props.profile}/>
      <MyPostsContainer store ={ props.store } profile = {props.profile}  />
    </section>
  );
}

export default Profile;