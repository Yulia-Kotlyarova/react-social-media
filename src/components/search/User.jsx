import React from 'react';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const User = (props) => {
    debugger
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
                            props.followed ? <button disabled = {props.followingInProgress.some(id => id === props.id)} className = {followStyle.join(' ')} onClick = { () => {
                                // props.followProgress(true, props.id);
                                props.unfollow(props.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {withCredentials: true, headers:{"API-KEY":'b785b553-c9d8-4045-8027-f8b9d6fe1d19'}})
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        props.unfollow(props.id);
                                    };
                                    // props.followProgress(false, props.id);
                            })

                            }}> unfollow </button>
                            : <button disabled = {props.followingInProgress.some(id => id === props.id)} className = {followStyle.join(' ')} onClick = { () => {
                                // props.followProgress(true, props.id);
                                props.follow(props.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {withCredentials: true, headers:{"API-KEY":'b785b553-c9d8-4045-8027-f8b9d6fe1d19'}})
                                .then(response => {
                                    // props.setUsers(response.data.items); // props sended by connect
                                    if (response.data.resultCode === 0){
                                        props.follow(props.id);
                                    };
                                    // props.followProgress(false, props.id);
                            })
                            }}> follow </button>
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
