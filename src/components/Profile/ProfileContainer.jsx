import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import '../../style/App.css';
import Profile from './Profile';
import {getProfile} from '../data/profile-reducer';
import { withRouter } from 'react-router-dom';

const ProfileContainer = (props) => {
    // let userId = props.match.params.userId;
    let userId = props.userId;
    if (!userId) {
        userId = 11;
    }
    React.useEffect(()=> {
        props.getProfile(userId) // TODO проблемы с пропсами компоненты
    },[])
    return (
        <Profile isAuth ={ props.isAuth } profile = {props.profile} />
      );
}

let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    userId: state.auth.id
})

// let urlProfileComponent = withRouter(ProfileContainer);
// const ProfileContainer = connect(mapStateToProps, getProfile)(Profile);

export default connect(mapStateToProps, {getProfile})(ProfileContainer);
