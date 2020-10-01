
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const USER_PAGES_TOGGLE = 'USER_PAGES_TOGGLE';
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'; 
const LOADING = 'LOADING';
const FOLLOW_PROGRESS = 'FOLLOW_PROGRESS';


let initialState = {
    users: [],
    isLoading:true,
    followingInProgress:[],
    totalUserCount: 0,
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
            debugger
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
        case FOLLOW_PROGRESS: {
            return action.isLoading 
            ?[ ...state.followingInProgress, action.userId] 
            :[ state.followingInProgress.filter(id => id != action.userId)]
        }
    
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const togglePage = (page) => ({ type: USER_PAGES_TOGGLE, page });
export const totalCount = (total) => ({ type: TOTAL_USER_COUNT, total});
export const toLoading = (loading) => ({type: LOADING, loading});
export const followProgress = (loading, userId) => ({type: FOLLOW_PROGRESS, loading, userId});

export default searchReducer;
