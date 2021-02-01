import React from 'react';
import { connect } from 'react-redux';
import '../../style/App.css';
import Profile from './Profile';
import {getProfile} from '../data/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirectComponent } from '../hoc/AuthRedirect';

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;

    // let userId = props.userId;
    if (!userId) {
        userId = 11;
    }
    React.useEffect(()=> {
        props.getProfile(userId);
    },[])

    return (
        <Profile isAuth ={ props.isAuth } profile = {props.profile} />
      );
}

let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile,
    // userId: state.auth.id
});

let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer); // HOC for redirect
let withUrl = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfile})(withUrl);
