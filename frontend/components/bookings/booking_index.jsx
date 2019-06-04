import React from 'react';
import BookingDetail from './booking_detail';


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
    const bookingItems = this.props.bookings.map(booking => (<BookingDetail key={booking.id} booking={booking} />))
    return (
      <div>
        <h1>Your Bookings</h1>
        <ul>{bookingItems}</ul>
      </div>
    )
  }
}

export default BookingIndex;