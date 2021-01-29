import React from 'react';
import { connect } from 'react-redux';
import { authReduser, setAuthUserData, authThunkCreator } from './components/data/auth-reduser';

import Header from './Header';

const HeaderContainer = (props) => {

    React.useEffect(() => {
        props.authThunkCreator();
    },[])

    return <Header {...props}/>
}

let mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData, authThunkCreator})(HeaderContainer)
