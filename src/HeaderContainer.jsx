import React from 'react';
import { connect } from 'react-redux';
import {getAuthData } from './components/data/auth-reduser';

import Header from './Header';

const HeaderContainer = (props) => {

    React.useEffect(() => {
        props.getAuthData();
    },[])

    return <Header {...props}/>
}

let mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { getAuthData })(HeaderContainer)
