import React from 'react';

const User = (props) => {
    return (
        <div className = "col-5  d-flex justify-content-center mr-2 mb-2 user-box">
                <div className ="row">
                    <div className="col-5 d-flex flex-column justify-content-between align-items-center">
                        <img src = {props.ava} className = "ava-friend" />
                        {
                            props.followed ? <button className = "btn-second" onClick = { () => props.unfollow(props.id)}> unfollow </button>
                            : <button className = "btn-second" onClick = { () => props.follow(props.id)}> follow </button>
                        }
                    </div>
                    <div className="col-7 d-flex flex-column justify-content-between ">
                        <strong> {props.name} </strong> <br/>
                        <span> {props.status} </span>
                        <span> {props.city}, {props.cnt} </span>
                    </div>
                </div>
        </div>
    )
}

export default User;
