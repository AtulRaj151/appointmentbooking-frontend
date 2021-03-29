import React, { Component } from "react";
import { connect } from "react-redux";
import { book, check } from "../../Action/action";
class NewBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
    };
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  handleCheckAvail = () => {
    // implement check availaibility
    const { date, time } = this.state;
    console.log(date, time, "in booking new    ");
    if (date && time) {
      this.props.dispatch(check(date, time));
    }
  };
  handleBookAppointment = () => {
    // book an appointment
    const { date, time } = this.state;
    console.log(date, time, "in booking new    ");
    if (date && time) {
      this.props.dispatch(book(date, time));
    }
  };
  render() {
    return (
      <div className="my-booking">
        <div className="booking-info">
          <label htmlFor="date">
            <span>Select Date: </span>
          </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2021-01-01"
            max="2030-12-31"
            onChange={(e) => this.handleInputChange("date", e.target.value)}
          />
          <label htmlFor="time">
            <span>Select Time: </span>
          </label>
          <input
            type="time"
            id="time"
            onChange={(e) => this.handleInputChange("time", e.target.value)}
          />
        </div>
        <div>
          <button
            className="mybooking-check-avail"
            onClick={() => this.handleCheckAvail()}
          >
            Check Availability
          </button>
          <button
            className="mybooking-book"
            onClick={() => this.handleBookAppointment()}
          >
            Book
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state,
  };
}
export default connect(mapStateToProps)(NewBooking);
