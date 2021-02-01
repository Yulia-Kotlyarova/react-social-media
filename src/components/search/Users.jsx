import React from 'react';
import User from './User';
import cat from '../../img/cat-face.svg';

const Users = (props) => {
    const selectPageStyle = 'active-page';
    const pageItem = props.pages.map(page => {
        return <li onClick = {() => props.anotherPage(page) } className = {`nav-item pagination ${page == props.currentPage && selectPageStyle }`} > {page} </li>
    });

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
         followingInProgress = {props.followingInProgress}
         followProgress = {props.followProgress} />
    })
    return (
        <section className="col-8 ml-2 users ">
            { props.isLoading && <div> is loading... </div>}
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

export default Users;
