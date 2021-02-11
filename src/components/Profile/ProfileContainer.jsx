import React from 'react';
import { connect } from 'react-redux';
import '../../style/App.css';
import Profile from './Profile';
import { getProfile, getStatus, upDateStatus } from '../data/profile-reducer';
import { getAuthData } from '../data/auth-reduser';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirectComponent } from '../hoc/AuthRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {
    let userId = props.userID;
    if (!userId){
        userId = '11'
    }
    React.useEffect(()=> {
        props.getProfile(props.userId);
        props.getStatus(props.userId);
    },[props.userId])

    return (
        <Profile 
        isAuth ={ props.isAuth } 
        profile = { props.profile } 
        status = { props.status }
        upDateStatus = { props.upDateStatus }
        />
    );
}

let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, upDateStatus, getAuthData }),
    withRouter,
  )(ProfileContainer)
