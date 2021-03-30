import React, { Component } from "react";
import { connect } from "react-redux";
import { book } from "../../Action/action";
import SlotCard from "./SlotCard";

class DashBoard extends Component {
  render() {
    const { bookings } = this.props.state.booking;
    console.log("booking in dashboard", bookings);

    return (
      <div className="dashboard">
        <h1 className="dash-header">Today's Slot</h1>
        <div className="slotcard-wrapper">
          {bookings.map((book, index) => (
            <SlotCard time={book.time} key={`index+${index}`} />
          ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps)(DashBoard);
