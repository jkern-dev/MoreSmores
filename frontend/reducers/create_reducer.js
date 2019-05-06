import {UPDATE_SITE_STATE} from '../actions/site_actions';
import {merge} from 'lodash';


const createReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_SITE_STATE:
            const newSite = { [action.key]: action.value }
            return merge({},state,newSite);
        default:
            return state;
    }
}

export default createReducer;