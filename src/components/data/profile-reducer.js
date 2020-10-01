const ADD_POST = 'ADD POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postData: [
      { id: '1', message: 'Hi! I am pipetka!', likeCount: '12' },
      { id: '2', message: "It's my first post.", likeCount: '13' },
      { id: '3', message: 'Pipetka loves you!', likeCount: '69' },
    ],

    newPostText: 'kookooshka',
    profile: null,
  }

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let post = {
                id: '4', 
                message: state.newPostText,
                likeCount: '0'
              };
              let stateCopy = {...state}; // CREATE COPY OF STATE TO WORK WITH
              stateCopy.postData = [...state.postData];
              stateCopy.postData.push(post);
              stateCopy.newPostText = '';
              // state.postData.push(post);
              // state.newPostText = '';
              // return state;
            return stateCopy;
        }
        case UPDATE_NEW_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
            // state.newPostText = action.text;
            // return state;
        }
        case SET_USER_PROFILE: {
          debugger
          return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export const addPostActCreator = () => ({type: ADD_POST });
export const onPostChangeActCreator = (newText) => ({ type: UPDATE_NEW_TEXT, text: newText });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;
