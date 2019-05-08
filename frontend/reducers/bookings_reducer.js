import {
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_BOOKING,
  CREATE_BOOKING,
  REMOVE_BOOKING
} from '../actions/bookings_actions';

import {merge} from 'lodash';

const bookingsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings || {};
    case RECEIVE_BOOKING:
      let newState = merge({}, state, action.booking);
      return newState; 
    case REMOVE_BOOKING:
      newState = merge({}, state);
      delete newState[action.bookingId];
      return newState;
    case CREATE_BOOKING:
      return merge({}, state, {booking: action.booking})
    default:
      return state;
  }
}

export default bookingsReducer;