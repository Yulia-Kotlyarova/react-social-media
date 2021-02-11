import monster from '../../img/angry-monster.svg';
import eye from '../../img/eye-open.svg';
import jelly from '../../img/jellyfish.svg';
import unity from '../../img/unity-hand.svg';
import cat from '../../img/cat-face.svg';

const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]

  }

const dialogReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE: {
            let message = {
                id: '4',
                message: action.newMessageBody.messageText,
              };

            let stateCopy = {...state}; // CREATE COPY OF STATE TO WORK WITH
            stateCopy.messagesData = [...state.messagesData]; //copy of arr
            stateCopy.messagesData.push(message);
            // stateCopy.newMessageText = '';
            return stateCopy;
            
            // state.messagesData.push(message);
            // state.newMessageText = '';
            // return state;
        }
        default:
            return state;
    }
}

export const sendMessageActCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody });

export default dialogReducer;
