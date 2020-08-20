const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogReduser = (state, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            let message = {
                id: '4',
                message: state.newMessageText,
              };
            
            state.messagesData.push(message);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE: 
            state.newMessageText = action.text;
            return state;

        default:
            return state;
    }
}

export const sendMessageActCreator = () => ({type: ADD_MESSAGE });
export const onMessageChangeActCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, text: text });

export default dialogReduser;
