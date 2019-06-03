import {connect} from 'react-redux';
import { requestAllBookings } from '../../actions/bookings_actions';
import BookingIndex from './booking_index';

const mapStateToProps = (state, ownProps) => {
  return {
    bookings: state.entities.bookings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestAllBookings: () => dispatch(requestAllBookings())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);

