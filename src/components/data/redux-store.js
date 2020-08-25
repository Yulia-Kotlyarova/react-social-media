import { createStore, combineReducers } from "redux";
import profileReduser from './profile-reduser.js';
import dialogReduser from './dialog-reduser.js';
import sidebarReduser from './sidebar-reduser.js';

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogReduser,
    linkData: sidebarReduser
});

let store = createStore(redusers);

export default store;
