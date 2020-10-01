import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer.js';
import dialogReducer from './dialog-reducer.js';
import sidebarReducer from './sidebar-reducer.js';
import searchReducer from './search-reduser';
import authReduser from "./auth-reduser.js";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    linkData: sidebarReducer,
    usersPage: searchReducer,
    auth: authReduser
});  // STATE

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
