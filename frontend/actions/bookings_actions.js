import * as APIUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const CREATE_BOOKING = "CREATE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
)

export const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
})

export const deleteBooking = bookingId => dispatch => (
  APIUtil.deleteBooking(bookingId)
    .then(booking => dispatch(removeBooking(booking)))
)

export const receiveAllBookings = bookings => ({
  bookings: bookings,
  type: RECEIVE_ALL_BOOKINGS
});

export const requestAllBookings = () => dispatch => (
  APIUtil.fetchBookings()
    .then(bookings => dispatch(receiveAllBookings(bookings)))
)

