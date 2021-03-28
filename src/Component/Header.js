import React, { Component } from "react";
import "../Static/Css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <button className="btn-header">
          <span className="btn-text-header">DashBoard</span>
        </button>
        <button className="btn-header">
          <span className="btn-text-header">My Booking</span>
        </button>
        <button className="btn-header">
          <span className="btn-text-header">New Booking</span>
        </button>
        <button className="btn-header-logout">
          <span className="btn-text-logout">Logout</span>
        </button>
      </div>
    );
  }
}
export default Header;
