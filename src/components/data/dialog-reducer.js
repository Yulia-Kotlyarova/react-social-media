import monster from '../../img/angry-monster.svg';
import eye from '../../img/eye-open.svg';
import jelly from '../../img/jellyfish.svg';
import unity from '../../img/unity-hand.svg';
import cat from '../../img/cat-face.svg';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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

  }

const dialogReducer = (state = initialState, action) => {

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

export default dialogReducer;
