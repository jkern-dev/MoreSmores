import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import sitesReducer from './sites_reducer';
import createReducer from './create_reducer';


export default combineReducers({
    users: usersReducer,
    sites: sitesReducer,
    create: createReducer
})