
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}

const searchReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = [...state.users.map((u) => {
                if (u.id === action.userId) {
                   return {...u, followed: true}
                }
                return u;
            })];
            return stateCopy;
        }

        case UNFOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = [...state.users.map((u) => {
                if (u.id === action.userId) {
                   return {...u, followed: false}
                }
                return u;
            })];
                return stateCopy;
        }
        case SET_USERS: { // TODO:uncomment
            return { ...state, users: [ ...state.users, ...action.users]} //склеивает два массива
        }   
    
        default:
            return state
    }
}

export const followActCreator = (userId) => ({type: FOLLOW, userId });
export const unfollowActCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default searchReducer;
