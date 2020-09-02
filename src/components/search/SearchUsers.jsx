import React from 'react';
import User from './User';
import cat from '../../img/cat-face.svg';
import * as axios from 'axios';

const SearchUsers = (props) => {
    debugger
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
        // props.setUsers(        
        //     [     
        //     {id: 1, followed: false, photoUrl: `${cat}`, fullName: "pipetka", status: "full of pipetochnost", location: { city:'SPb', cnt:'Russia' }},
        //     {id: 2, followed: true, photoUrl: `${cat}`, fullName: "meaw", status: "mr cat", location: { city:'SPb', cnt:'Russia' }},
        //     {id: 3, followed: false, photoUrl: `${cat}`, fullName: "cosmo-dust", status: "full of dust", location: { city:'no', cnt:'no matter' }},
        //     {id: 4, followed: true, photoUrl: `${cat}`, fullName: "unity", status: "we are", location: { city:'all of', cnt:'all of' }}
        //     ]
        // )
    }

    const userItem = props.users.map( u => {
        return <User id = {u.id} 
         photos = {u.photos}
         ava = {cat}
         name = {u.name} 
         followed = {u.followed}
         status = {u.status}
        //  city = {u.location.city}
        //  cnt = {u.location.cnt}
         key = {u.id}
         follow = {props.follow}
         unfollow = {props.unfollow} /> 
    })
    return (
        <section className="col-8 ml-2 users ">
            <div className="row">
                { userItem }
            </div>
            <button className = "send-btn"> MORE </button>
        </section>
    )
}

export default SearchUsers;
