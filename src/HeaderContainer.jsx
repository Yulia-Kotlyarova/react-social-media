import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import setAuthUserData from './components/data/auth-reduser';

import Header from './Header';

const HeaderContainer = () => {
    React.useEffect(()=> {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                // props.setUserProfile(response.data)
                if(response.data.resultCode === 0) {
                    let {id, login, email} = {...response.data.data};
                    setAuthUserData(id, login, email);
                }
        })
    },[])
    return (
        <Header/>
    )
}

let mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
