import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import users from './users_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    users,
    ui,
    errors
});

export default rootReducer;