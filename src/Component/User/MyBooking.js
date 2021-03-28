import React from "react";

function MyBooking(props) {
  return (
    <div className="booking-wrapper">
      <div className="list-booking">
        <table>
          <tr>
            <th colSpan="1">S.No</th>
            <th colSpan="2">Booking ID</th>
            <th colSpan="2">Date</th>
            <th colSpan="2">Time</th>
          </tr>
          <tr>
            <td colSpan="1">1</td>
            <td colSpan="2">12345645253</td>
            <td colSpan="2">10 10 2011</td>
            <td colSpan="2">10:16</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyBooking;
