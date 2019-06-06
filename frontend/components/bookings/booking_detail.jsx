import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class BookingDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className = "booking-detail">
        <div className = "booking-info">
          <img 
            className = "booking-image" 
            src={this.props.booking.photoUrl}
          />
          <div className = "booking-dates">
            <Link to = {`/sites/${this.props.booking.site_id}`}>
              <h1 className = "booking-location">{this.props.booking.name}</h1>
            </Link>
            <p>Start Date: {this.props.booking.start_date}</p>
            <p>End Date: {this.props.booking.end_date}</p>
            <button 
              className="edit-button" 
              onClick={() => this.props.deleteBooking(this.props.booking.id)
                .then(this.props.history.push('/'))}
            >Delete Booking</button>
          </div>
        </div>
      </li>
    )
  }
}

export default withRouter(BookingDetail);