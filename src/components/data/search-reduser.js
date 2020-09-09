
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const USER_PAGES_TOGGLE = 'USER_PAGES_TOGGLE';
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'; 
const LOADING = 'LOADING';


let initialState = {
    users: [],
    isLoading:true,
    totalUserCount: 10,
    pageSize: 6,
    currentPage: 1,
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            debugger
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
        case SET_USERS: {
            return { ...state, users: action.users}
        }  
        case USER_PAGES_TOGGLE: {
            return { ...state, currentPage: action.page}
        } 
        case TOTAL_USER_COUNT: {
            return { ...state, totalUserCount: action.total}
        }
        case LOADING: {
            return { ...state, isLoading: action.loading}
        }
    
        default:
            return state
    }
}

export const followActCreator = (userId) => ({type: FOLLOW, userId });
export const unfollowActCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const userPagesToggleAC = (page) => ({ type: USER_PAGES_TOGGLE, page });
export const totalCountAC = (total) => ({ type: TOTAL_USER_COUNT, total});
export const isLoadingAC = (loading) => ({type: LOADING, loading});

export default searchReducer;
