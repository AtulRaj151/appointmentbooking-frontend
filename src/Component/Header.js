import React, { Component } from "react";
import "../Static/Css/Header.css";
import { connect } from "react-redux";
import {
  setDashBoardMenu,
  setMyBookingMenu,
  setNewBookingMenu,
} from "../Action/action";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  changeDashBoard = (val) => {
    this.props.dispatch(setDashBoardMenu(val));
  };
  changeNewBooking = (val) => {
    this.props.dispatch(setNewBookingMenu(val));
  };
  changeMyBooking = (val) => {
    this.props.dispatch(setMyBookingMenu(val));
  };
  render() {
    console.log(this.props.state);
    return (
      <div className="header">
        <button
          className="btn-header"
          onClick={() => this.changeDashBoard(true)}
        >
          <span className="btn-text-header">DashBoard</span>
        </button>
        <button
          className="btn-header"
          onClick={() => {
            this.changeMyBooking(true);
          }}
        >
          <span className="btn-text-header">My Booking</span>
        </button>
        <button
          className="btn-header"
          onClick={() => this.changeNewBooking(true)}
        >
          <span className="btn-text-header">New Booking</span>
        </button>
        <button className="btn-header-logout">
          <span className="btn-text-logout">Logout</span>
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Header);
