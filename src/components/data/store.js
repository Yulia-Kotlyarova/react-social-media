
// old store, now store in REDUX-STORE

import monster from '../../img/angry-monster.svg';
import eye from '../../img/eye-open.svg';
import jelly from '../../img/jellyfish.svg';
import unity from '../../img/unity-hand.svg';
import cat from '../../img/cat-face.svg';
import profileReducer from './profile-reducer.js';
import dialogReducer from './dialog-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let store = {
  _state: {

    linkData: [
      { id: 1, link: "/profile", linkName: "profile" },
      { id: 2, link: "/dialog", linkName: "dialog" },
      { id: 3, link: "/news", linkName: "news" },
      { id: 4, link: "/music", linkName: "music" },
      { id: 5, link: "/settings", linkName: "settings" },
      // { id: 6, link: "/friends", linkName: "friends"},
    ],

    dialogsPage: {
      messagesData: [
        { id: '1', message: 'Hi!' },
        { id: '2', message: 'Pipetka! ' },
        { id: '3', message: 'Pipetka loves you!' },
      ],

      dialogsData: [
        { id: '1', name: 'Pipetka', ava: `${monster}` },
        { id: '2', name: 'Kykyshka ', ava: `${eye}` },
        { id: '3', name: 'Senya', ava: `${jelly}` },
        { id: '4', name: 'Fatty Cat', ava: `${unity}` },
        { id: '5', name: 'Murrr', ava: `${cat}` },
      ],

      newMessageText: 'how low?'

    },

    profilePage: {
      postData: [
        { id: '1', message: 'Hi! I am pipetka!', likeCount: '12' },
        { id: '2', message: "It's my first post.", likeCount: '13' },
        { id: '3', message: 'Pipetka loves you!', likeCount: '69' },
      ],

      newPostText: 'kookooshka'
    }
  },

  // getState() {
  //   debugger
  //   return this._state;
  // },

  // _callSubscriber() {
  //   debugger
  //   console.log(true);
  // },

  // subscribe(observer) {
  //   debugger
  //   this._callSubscriber = observer;
  // },

  // addPost() {

  //   let post = {
  //     id: '4', 
  //     message: this._state.profilePage.newPostText,
  //     likeCount: '0'
  //   };

  //   this._state.profilePage.postData.push(post);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },

  // updateNewPost (text) {
  //   debugger
  //   this._state.profilePage.newPostText = text;
  //   this._callSubscriber(this._state);
  // },

  // addMessage() {
  //   let message = {
  //     id: '4',
  //     message: this._state.dialogsPage.newMessageText,
  //   };

  //   this._state.dialogsPage.messagesData.push(message);
  //   this._state.dialogsPage.newMessageText = '';
  //   this._callSubscriber(this._state);
  // },

  // updateNewMessage(text) {
  //   this._state.dialogsPage.newMessageText = text;
  //   this._callSubscriber(this._state);
  // },

  // dispatch(action) {

  //   this._state.profilePage = profileReducer(this._state.profilePage, action);
  //   this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
  //   this._state.linkData = sidebarReducer(this._state.linkData, action);

  //   this._callSubscriber(this._state);

  // }
}

// export default store;
