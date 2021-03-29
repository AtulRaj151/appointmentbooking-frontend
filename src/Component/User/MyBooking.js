import React from "react";
import { connect } from "react-redux";

function MyBooking(props) {
  const { bookings } = props.state.booking;
  console.log("Mybooking", bookings);
  return (
    <div className="booking-wrapper">
      <div className="list-booking">
        <table>
          <tbody>
            <tr>
              <th colSpan="1">S.No</th>
              <th colSpan="2">Booking ID</th>
              <th colSpan="2">Date</th>
              <th colSpan="2">Time</th>
            </tr>
            {bookings.map((booking, index) => (
              <tr key={`row-${index}`}>
                <td colSpan="1">{index + 1}</td>
                <td colSpan="2">{booking._id}</td>
                <td colSpan="2">{booking.date}</td>
                <td colSpan="2">{booking.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps)(MyBooking);
