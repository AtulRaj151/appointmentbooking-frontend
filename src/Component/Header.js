import React, { Component } from "react";
import "../Static/Css/Header.css";
import { connect } from "react-redux";
import {
  setDashBoardMenu,
  setMyBookingMenu,
  setNewBookingMenu,
} from "../Action/action";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.state);
    return (
      <div className="header">
        <Link to="/dashboard">
          <button className="btn-header">
            <span className="btn-text-header">DashBoard</span>
          </button>
        </Link>
        <Link to="/mybooking">
          <button className="btn-header">
            <span className="btn-text-header">My Booking</span>
          </button>
        </Link>

        <Link to="/newbooking">
          <button className="btn-header">
            <span className="btn-text-header">New Booking</span>
          </button>
        </Link>
        <Link to="/logout">
          <button className="btn-header-logout">
            <span className="btn-text-logout">Logout</span>
          </button>
        </Link>
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
