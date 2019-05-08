import React from 'react';
import { withRouter } from 'react-router-dom';


// import { DateRangePicker, DayPickerRangeController } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: "",
      user_id: props.sessionId,
      site_id: props.match.params.siteId,
      end_date: "",
      total_price: 0,
      group_size: 1,
      approved: false,
      reviewed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSite(this.props.match.params.siteId);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, this.state);
    booking.user_id = this.props.sessionId;
    booking.site_id = this.props.match.params.siteId;
    this.props.createBooking(booking)
      .then(() => this.props.history.push(`/#/sites/${this.props.match.params.siteId}`));
  }

  handleDateChange(type) {
    this.setState({[type]: [e.currentTarget.value]})
  }

  render() {
    const siteId = this.props.match.params.siteId;
    const currSite = this.props.sites[siteId];
    const currentDate = new Date().toString();

    return (
      // <h1>Booking Form</h1>
      <div className="booking-form">
        <form onSubmit={this.handleSubmit}>
          ${currSite.price} Per Night
          <br />
          <label>
            Start Date:
            <input
              type="date"
              min={currentDate}
              onChange={this.update("start_date")}
            />
          </label>
          <br />
          <label>
            End Date:
            <input
              type="date"
              min={this.state.start_date + 1}
              onChange={this.update("end_date")}
            />
          </label>
          <label>Group Size:
          <input 
            type="number"
            min="1"
            value={this.state.group_size}
            onChange={this.update("group_size")}
          />
          </label>
          <input type="submit" value="Book Site!" />
        </form>
      </div>
    );
  }
}

export default BookingForm;