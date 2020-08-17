import React from 'react';
import './style/App.css';

const DialogItem = (props) => {
  return <a className = " col-4 friend-ava"> 
            <img src= {props.ava} alt="props.name" className = "ava-friend"/>
        </a>
}

function Friends(props) {

  const friendItems = props.dialogsData.map(el => <DialogItem ava = {el.ava} name = {el.name} id = {el.id}/>);

  return (
    <div className="row justify-content-around friends-box">
       { friendItems }
    </div>
  );
}

export default Friends;
