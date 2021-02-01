import React from 'react';
import { Provider, connect, useSelector, useDispatch } from 'react-redux';
import SearchUsers from './SearchUsers';
import { follow, unfollow, togglePage, followProgress, getUsersThunkCreator  } from '../data/search-reduser.js';
import { withAuthRedirectComponent } from '../hoc/AuthRedirect';

let mapStateToProps = (state) => { // принимает стейт и возвращает только то, что нужно юзеру
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

const UserRedirectComponent = withAuthRedirectComponent(SearchUsers); // HOC for redirect

const SearchUsersContainer = connect(mapStateToProps, 
    { follow, unfollow, togglePage, followProgress, getUsers:getUsersThunkCreator })(UserRedirectComponent);


export default SearchUsersContainer;
