import React from 'react';
import { Provider, connect, useSelector, useDispatch } from 'react-redux';
import User from './User';
import cat from '../../img/cat-face.svg';
import * as axios from 'axios';
import { followActCreator, unfollowActCreator, setUsersAC } from '../data/search-reduser';

const SearchUsers = (props) => {
    debugger 

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    const selectPageStyle = 'active-page'

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

    let pageItem = pages.map(page => {
        return <li onClick = {() => anotherPage(page) } className = {`nav-item pagination ${page == props.currentPage && selectPageStyle }`} > {page} </li>
    });


    React.useEffect(()=> {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items); // props sended by connect
                props.totalCount(response.data.totalCount);
        })
    },[])
    


    const userItem = props.users.map( u => {
        return <User id = {u.id} 
         photos = {u.photos}
         ava = {cat}
         name = {u.name} 
         followed = {u.followed}
         status = {u.status}
         key = {u.id}
         follow = { props.follow }
         unfollow = { props.unfollow }
          /> 
    })
    return (
        <section className="col-8 ml-2 users ">
            <div className="row">
                { userItem }
            </div>
            <ul className="nav">
                { pageItem }
            </ul>
            {/* <button className = "send-btn" > MORE </button> */}
        </section>
    )
}

export default SearchUsers;
