import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AdminSignUp extends Component {
  render() {
    return (
      <div className="admin-sign-up">
        <div className="auth-container">
          <div className="auth-header">Admin Sign Up</div>
          <div className="input-container" style={{ height: "48%" }}>
            <input type="text" className="input-field" placeholder="Name" />
            <input type="email" className="input-field" placeholder="Email" />
            <input
              type="password"
              className="input-field"
              placeholder="Auth Code"
            />
          </div>

          <button className="btn-submit">
            <span className="btn-txt">Sign Up</span>
          </button>
        </div>
        <div className="auth-option">
          <p>have a Admin account? </p>
          <Link to="/admin/login">
            <span style={{ color: "blue", cursor: "pointer" }}>
              Sign In Now
            </span>
          </Link>
          <br />
          <p>Go to</p>{" "}
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>
              User Sign Up
            </span>
          </Link>
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

export default connect(mapStateToProps)(AdminSignUp);
