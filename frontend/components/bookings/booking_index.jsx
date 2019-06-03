import React from 'react';


class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookings: props.bookings }
  }

  componentDidMount() {
    this.props.requestAllBookings();
  }

  render() {
    return (
      <h1>This Works!</h1>
    )
  }
}

export default BookingIndex;