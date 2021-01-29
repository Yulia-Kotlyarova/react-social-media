import React from 'react';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../api/api';

const User = (props) => {
    let followStyle = ["btn-second"];

    if (!props.followed) {
        followStyle.push('follow')
    }
    return (
        <div className = "col-5 mr-2 mb-2 user-box">
                <div className ="row">
                    <div className="col-5 d-flex flex-column justify-content-between align-items-center">
                        <NavLink to = { '/profile/' +  props.id}>
                            {
                                props.photos.small != null ? <img src = {props.photos.small} className = "ava-friend" /> : <img src = {props.ava} className = "ava-friend" />
                            }
                        </NavLink>
                        {
                            props.followed ? <button disabled = {props.followingInProgress.some(id => id === props.id)} 
                            className = {followStyle.join(' ')} 
                            onClick = {() => props.follow(props.id)}> 
                            unfollow 
                            </button>
                            : <button disabled = {props.followingInProgress.some(id => id === props.id)} 
                            className = {followStyle.join(' ')} 
                            onClick = {() => props.unfollow(props.id)}> 
                            follow 
                            </button>
                        }
                    </div>
                    <div className="col-7 d-flex flex-column justify-content-between ">
                        <strong> {props.name} </strong> <br/>
                        <span> {props.status} </span>
                    </div>
                </div>
        </div>
    )
}

export default User;
