import React from 'react';
import BookingDetail from './booking_detail';
import { Link } from 'react-router-dom';


class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { 
    //   bookings: props.bookings,
    //   sites: props.sites
    // }
  }

  componentDidMount() {
    this.props.requestAllBookings();
  }

  

  render() {
    const bookingItems = this.props.bookings.map(booking => (
      <BookingDetail 
        key={booking.id} 
        booking={booking} 
        deleteBooking = {this.props.deleteBooking} 
      />
    ))

    const yesItems = () => {
      return (
        <div className="bookings">
          <h1>Your Bookings</h1>
          <ul>{bookingItems}</ul>
        </div>
      )
    };
    
    const noItems = () => {
      return (
        <div className = "no-bookings">
          <h1>You Have No Bookings!</h1>
          <Link
            to="/sites"
            className="booking-reminder"
          >
            <h1>Find a Campsite to book!</h1>
          </Link>
        </div>
      );
    };

    return this.props.bookings.length > 0 ? yesItems() : noItems();
  }
}

export default BookingIndex;