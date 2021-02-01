import React from 'react';
import '../../style/App.css';
import m from'../../style/Profile.module.css';
import astronaut from '../../img/astronaut.svg';

function ProfileInfo(props) {
  console.log(props);
  if (!props.profile) {
    return <div> is loading... </div>
  }
  return (
      <div className="person-box">
        <div className="ava d-flex">
          <div className={m.avabox}>
            <img src= {props.profile.photos.small || astronaut} className={m.mainava} alt="ava" />
          </div>
          {/* <img src= {props.profile.photos.large} className={m.ava} alt="ava" /> */}
          <p className={m.description}>
          <strong> {props.profile.fullName}</strong> <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Porro ratione soluta magnam eum reprehenderit, natus cumque ab necessitatibus tempora 
          dolorum fugiat rem, ut architecto! 
          Vitae possimus nesciunt ex voluptas. Quos!</p>
        </div>
      </div>
  );
}

export default ProfileInfo;