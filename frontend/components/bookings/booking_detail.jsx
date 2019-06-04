import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className = "booking-detail">
        <div className = "booking-info">
          <img className = "booking-image" src={this.props.booking.photoUrl}/>
          <div className = "booking-dates">
            <h1>{this.props.booking.name}</h1>
            <p>Start Date: {this.props.booking.start_date}</p>
            <p>End Date: {this.props.booking.end_date}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default withRouter(BookingDetail);