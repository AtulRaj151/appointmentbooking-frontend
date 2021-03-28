import React, { Component } from "react";
import { connect } from "react-redux";
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
