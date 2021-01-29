import { usersAPI } from '../api/api';

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

const acceptFollow = (userId) => ({type: FOLLOW, userId });
const acceptUnfollow = (userId) => ({ type: UNFOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
const togglePage = (page) => ({ type: USER_PAGES_TOGGLE, page });
const totalCount = (total) => ({ type: TOTAL_USER_COUNT, total});
const toLoading = (loading) => ({type: LOADING, loading});
const followProgress = (loading, userId) => ({type: FOLLOW_PROGRESS, loading, userId});

const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toLoading(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toLoading(false));
            dispatch(setUsers(data.items));
            dispatch(totalCount(data.totalCount));
        });
    } 
};

const follow = (id) => {
    return (dispatch) => {
        // dispatch(followProgress(true, id));
        dispatch(acceptUnfollow(id));
        usersAPI.unfollow(id)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(acceptUnfollow(id));
                };
                // dispatch(followProgress(false, id));
            })
    }
};

const unfollow = (id) => {
    return (dispatch) => {
        // dispatch(followProgress(true, id));
        dispatch(acceptFollow(id));
        usersAPI.follow(id)
            .then(response => {
                dispatch(setUsers(response.data.items));
                if (response.data.resultCode === 0){
                    dispatch(acceptFollow(id));
                };
                // dispatch(followProgress(false, id));
        })
    }
};

export default searchReducer;

export { follow, unfollow, togglePage, followProgress, getUsersThunkCreator};
