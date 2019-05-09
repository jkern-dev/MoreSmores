import { connect } from 'react-redux';
import React from 'react';
import { createBooking, deleteBooking } from '../../actions/bookings_actions';
import { fetchSite } from '../../actions/site_actions';
import BookingForm from './booking_form';


const mapStateToProps = (state, ownProps) => {
  return {
    bookings: state.entities.bookings,
    sessionId: state.session.id,
    sites: state.entities.sites
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    deleteBooking: id => dispatch(deleteBooking(id)),
    fetchSite: id => dispatch(fetchSite(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);