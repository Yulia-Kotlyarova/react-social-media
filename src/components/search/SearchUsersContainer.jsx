import React from 'react';
import { Provider, connect } from 'react-redux';
import SearchUsers from './SearchUsers';
import { followActCreator, unfollowActCreator, setUsersAC } from '../data/search-reduser';

let mapStateToProps = (state) => { // принимает стейт и возвращает только то, что нужно юзеру
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => { 
    return {
        follow: (userId) => dispatch(followActCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActCreator(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsers);

export default SearchUsersContainer;
