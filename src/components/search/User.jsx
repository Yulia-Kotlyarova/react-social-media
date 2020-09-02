import React from 'react';

const User = (props) => {
    return (
        <div className = "user-box">
                    <div className ="row">
                <div className="col-3 d-flex flex-column justify-content-around align-items-center">
                    <img src = {props.ava} className = "ava-friend" />
                    {
                        props.followed ? <button className = "btn-second" onClick = { () => props.unfollow(props.id)}> unfollow </button>
                         : <button className = "btn-second" onClick = { () => props.follow(props.id)}> follow </button>
                    }
                </div>
                <div className="col-9">
                    <strong> {props.name} </strong> <br/>
                    <span> {props.status} </span>
                    <span> {props.city}, {props.cnt} </span>
                </div>
            </div>
        </div>
    )
}

export default User;
