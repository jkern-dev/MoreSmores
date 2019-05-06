import { RECEIVE_ALL_SITES, RECEIVE_SITE, UPDATE_SITE_STATE} from '../actions/site_actions';
import {merge} from 'lodash';

const siteReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_SITES:
            // return merge({},state,action.sites);
            return action.sites
        case RECEIVE_SITE:
            let newState = merge({},state,{[action.site.id]: action.site});
            return newState;
            // return merge({}, state, action.site.sites);
        default: 
            return state;
    }
};

export default siteReducer;