import {
    RECEIVE_ALL_SITES,
    RECEIVE_SITE
} from '../actions/site_actions';
import {merge} from 'lodash';

const siteReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_SITES:
            return merge({},state,action.sites);
        case RECEIVE_SITE:
            return merge({}, state, action.site);
        default: 
            return state;
    }
};

export default siteReducer;