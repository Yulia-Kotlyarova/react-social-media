import React from 'react';
import { Provider, connect, useSelector, useDispatch } from 'react-redux';
import User from './User';
import Users from './Users';
import * as axios from 'axios';
import { followActCreator, unfollowActCreator, setUsersAC } from '../data/search-reduser';

const SearchUsers = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for (let i=1; i <= pageCount; i++){
        pages.push(i);
    }

    let anotherPage = (page) => {
        props.togglePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items); // props sended by connect
        })

    }

    React.useEffect(()=> {
        props.toLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(response => {
                props.toLoading(false);
                props.setUsers(response.data.items); // props sended by connect
                props.totalCount(response.data.totalCount);
        })
    },[])
    return (
        <Users anotherPage = {anotherPage} 
        pages = {pages} users = {props.users} 
        follow = { props.follow } 
        unfollow = { props.unfollow } 
        currentPage = {props.currentPage} 
        isLoading= {props.isLoading}
        toLoading = {props.toLoading} />
    )
}

export default SearchUsers;
