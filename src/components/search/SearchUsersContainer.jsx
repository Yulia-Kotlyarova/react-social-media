import React from 'react';
import { Provider, connect, useSelector, useDispatch } from 'react-redux';
import SearchUsers from './SearchUsers';
import { follow, unfollow, togglePage, followProgress, getUsersThunkCreator  } from '../data/search-reduser.js';

let mapStateToProps = (state) => { // принимает стейт и возвращает только то, что нужно юзеру
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}

const SearchUsersContainer = connect(mapStateToProps, 
    { follow, unfollow, togglePage, followProgress, getUsers:getUsersThunkCreator })(SearchUsers);

export default SearchUsersContainer;
