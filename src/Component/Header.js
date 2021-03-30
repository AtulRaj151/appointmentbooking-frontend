import React, { Component } from "react";
import "../Static/Css/Header.css";
import { connect } from "react-redux";
import { logoutUser } from "../Action/action";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  handleLogout = () => {
    localStorage.removeItem("token");
    // console.log(localStorage.getItem("token"));
    this.props.dispatch(logoutUser());
  };
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

        <button
          className="btn-header-logout"
          onClick={() => this.handleLogout()}
        >
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
