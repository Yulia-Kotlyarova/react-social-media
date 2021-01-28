import React from 'react';
import { Provider, connect, useSelector, useDispatch } from 'react-redux';
import User from './User';
import Users from './Users';
import * as axios from 'axios';
import { followActCreator, unfollowActCreator, setUsersAC } from '../data/search-reduser';
import {getUsers} from '../api/api' 

const SearchUsers = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for (let i=1; i <= pageCount; i++){
        pages.push(i);
    }

    let anotherPage = (page) => {
        props.togglePage(page);
        getUsers(page, props.pageSize).then(data => { // axios
                props.setUsers(data.items); // props sended by connect
        })
    }

    React.useEffect(()=> props.getUsersThunkCreator(),[])
    
    return (
        <Users anotherPage = {anotherPage} 
        pages = {pages} users = {props.users} 
        follow = { props.follow } 
        unfollow = { props.unfollow } 
        currentPage = {props.currentPage} 
        isLoading= {props.isLoading}
        toLoading = {props.toLoading}
        followingInProgress = {props.followingInProgress}
        followProgress = {props.followProgress} />
    )
}

export default SearchUsers;
