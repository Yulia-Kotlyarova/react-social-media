const ADD_POST = 'ADD POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
      { id: '1', message: 'Hi! I am pipetka!', likeCount: '12' },
      { id: '2', message: "It's my first post.", likeCount: '13' },
      { id: '3', message: 'Pipetka loves you!', likeCount: '69' },
    ],

    newPostText: 'kookooshka'
  }

const profileReduser = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let post = {
                id: '4', 
                message: state.newPostText,
                likeCount: '0'
              };
            
              state.postData.push(post);
              state.newPostText = '';
            return state;

        case UPDATE_NEW_TEXT: 
            state.newPostText = action.text;
            return state;

        default:
            return state;
    }
    // if (action.type === 'ADD POST') {
    //     let post = {
    //       id: '4', 
    //       message: state.newPostText,
    //       likeCount: '0'
    //     };
      
    //     state.postData.push(post);
    //     state.newPostText = '';
    //     // this._callSubscriber(this._state);
  
    //   } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    //     state.newPostText = action.text;
    //     // this._callSubscriber(this._state);
  
    //   }

    // return state;
}

export const addPostActCreator = () => ({type: ADD_POST });
export const onPostChangeActCreator = (newText) => ({ type: UPDATE_NEW_TEXT, text: newText });

export default profileReduser;
