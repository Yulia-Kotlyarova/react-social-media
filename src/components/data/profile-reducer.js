import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postData: [
      { id: '1', message: 'Hi! I am pipetka!', likeCount: '12' },
      { id: '2', message: "It's my first post.", likeCount: '13' },
      { id: '3', message: 'Pipetka loves you!', likeCount: '69' },
    ],

    newPostText: 'kookooshka',
    profile: null,
    status: '',
  }

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let post = {
              id: '4', 
              message: action.newPost.new_post,
              likeCount: '0'
            };
            let stateCopy = {...state}; // CREATE COPY OF STATE TO WORK WITH
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(post);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;

        }
        case SET_USER_PROFILE: {
          return {...state, profile: action.profile};
        }
        case SET_STATUS: {
          return {...state, status: action.status};
        }
        default:
            return state;
    }
}

export const addPostActCreator = (newPost) => ({type: ADD_POST, newPost });
export const onPostChangeActCreator = (newText) => ({ type: UPDATE_NEW_TEXT, text: newText });
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus= (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data));
      })
      .catch( err => console.log(err));
  }
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data));
      })
      .catch( err => console.log(err));
  }
};

export const upDateStatus = (status) => {
  return (dispatch) => {
    profileAPI.upDateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(response.data.status));
        }
      })
    .catch( err => console.log(err));
  }
};

export default profileReducer;
