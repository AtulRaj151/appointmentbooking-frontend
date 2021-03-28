import React, { Component } from "react";

export default class NewBooking extends Component {
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
  };
  handleBookAppointment = () => {
    // book an appointment
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
