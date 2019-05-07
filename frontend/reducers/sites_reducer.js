import { RECEIVE_ALL_SITES, RECEIVE_SITE, UPDATE_SITE_STATE, REMOVE_SITE} from '../actions/site_actions';
import {merge} from 'lodash';

const siteReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_SITES:
            return action.sites
        case RECEIVE_SITE:
            let newState = merge({},state,{[action.site.id]: action.site});
            return newState;
        case REMOVE_SITE:
          newState = merge({}, state);
          delete newState[action.site];
          return newState;
        default: 
            return state;
    }
};

export default siteReducer;