import React, { Component } from "react";

export default class NewBooking extends Component {
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
          />
          <label htmlFor="time">
            <span>Select Time: </span>
          </label>
          <input type="time" id="time" />
        </div>
        <div>
          <button className="mybooking-check-avail">Check Availability</button>
          <button className="mybooking-book">Book</button>
        </div>
      </div>
    );
  }
}
