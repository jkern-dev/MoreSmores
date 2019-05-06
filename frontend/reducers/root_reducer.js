import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import sites from './sites_reducer';
import users from './users_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    sites,
    users,
    ui,
    errors
});

export default rootReducer;