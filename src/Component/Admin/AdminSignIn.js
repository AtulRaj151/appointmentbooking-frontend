import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AdminSignIn extends Component {
  render() {
    return (
      <div className="admin-sign-in">
        <div className="auth-container">
          <div className="auth-header">Admin Sign In</div>
          <div className="input-container">
            <input type="text" className="input-field" placeholder="Name" />
            <input type="email" className="input-field" placeholder="Email" />
          </div>

          <button className="btn-submit">
            <span className="btn-txt">Sign In</span>
          </button>
        </div>
        <div className="auth-option">
          <p>Don't have a Admin account? </p>
          <Link to="/admin/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>
              Sign Up Now
            </span>
          </Link>
          <br />
          <p>Go to</p>{" "}
          <Link to="/login">
            <span style={{ color: "blue", cursor: "pointer" }}>
              User Sign In
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

export default connect(mapStateToProps)(AdminSignIn);
