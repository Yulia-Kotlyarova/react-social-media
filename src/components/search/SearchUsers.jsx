import React from 'react';
import Users from './Users';
import { Redirect } from 'react-router-dom';

const SearchUsers = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for (let i=1; i <= pageCount; i++){
        pages.push(i);
    }

    let anotherPage = (page) => {
        props.getUsers(page, props.pageSize) // async
    }

    React.useEffect(()=> props.getUsers(props.currentPage, props.pageSize),[]) // props sended by connect
    
    if(!props.isAuth) {
        return <Redirect to = {'/login'}/>
    }

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
