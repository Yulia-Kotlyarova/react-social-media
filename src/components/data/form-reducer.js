const SET_USER = 'SET-USER';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const formReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER: {
           return {...state, ...action.data, isAuth: true}
        }
        default:
            return state;
    }
}

export default formReducer;
