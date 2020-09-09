import React from 'react';
import { Provider, connect, useSelector, useDispatch } from 'react-redux';
import SearchUsers from './SearchUsers';
import { followActCreator, unfollowActCreator, setUsersAC, userPagesToggleAC, totalCountAC, isLoadingAC } from '../data/search-reduser';

let mapStateToProps = (state) => { // принимает стейт и возвращает только то, что нужно юзеру
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
    }
}
let mapDispatchToProps = (dispatch) => { 
    return {
        follow: (userId) => dispatch(followActCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActCreator(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        togglePage: (page) => dispatch(userPagesToggleAC(page)),
        totalCount: (total) => dispatch(totalCountAC(total)),
        toLoading: (loading) => dispatch(isLoadingAC(loading)),
    }
}

const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsers);

export default SearchUsersContainer;
