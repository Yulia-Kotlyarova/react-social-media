import { usersAPI } from '../api/api';
const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReduser = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA: {
           return {...state, ...action.data, isAuth: true}
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email) => {
    return ({type: SET_USER_DATA, data: {id, login, email}})
};

export const getAuthData = () => { // thunk
    return (dispatch) => {
        usersAPI.getAuthData()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = {...response.data.data};
                    dispatch(setAuthUserData(id, login, email));
                }
        })
    } 
};

export default authReduser;
