import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import '../../style/App.css';
import Profile from './Profile';
import {setUserProfile} from '../data/profile-reducer';
import { withRouter } from 'react-router-dom';

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;
    if (!userId) {
        userId = 11;
    }
    React.useEffect(()=> {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                console.log(response);
                props.setUserProfile(response.data)
        })
    },[])
    return (
        <Profile store ={ props.store } profile = {props.profile} />
      );
}

let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile,
})

let urlProfileComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(urlProfileComponent);
