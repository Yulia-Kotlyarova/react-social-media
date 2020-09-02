import React from 'react';
import User from './User';
import cat from '../../img/cat-face.svg';

const SearchUsers = (props) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers(        
            [     
            {id: 1, followed: false, photoUrl: `${cat}`, fullName: "pipetka", status: "full of pipetochnost", location: { city:'SPb', cnt:'Russia' }},
            {id: 2, followed: true, photoUrl: `${cat}`, fullName: "meaw", status: "mr cat", location: { city:'SPb', cnt:'Russia' }},
            {id: 3, followed: false, photoUrl: `${cat}`, fullName: "cosmo-dust", status: "full of dust", location: { city:'no', cnt:'no matter' }},
            {id: 4, followed: true, photoUrl: `${cat}`, fullName: "unity", status: "we are", location: { city:'all of', cnt:'all of' }}
            ]
        )
    }

    const userItem = props.users.map( u => {
        return <User id = {u.id} 
         ava = {u.photoUrl}
         name = {u.fullName} 
         followed = {u.followed}
         status = {u.status}
         city = {u.location.city}
         cnt = {u.location.cnt}
         key = {u.id}
         follow = {props.follow}
         unfollow = {props.unfollow} /> 
    })
    return (
        <section className="col-8 ml-2 users ">
            { userItem }
            <button className = "send-btn"> MORE </button>
        </section>
    )
}

export default SearchUsers;
