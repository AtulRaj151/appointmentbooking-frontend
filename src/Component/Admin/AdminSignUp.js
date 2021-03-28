import React, { Component } from "react";
import { connect } from "react-redux";
class AdminSignUp extends Component {
  render() {
    return (
      <div className="admin-sign-up">
        <div className="auth-container">
          <div className="auth-header">Admin Sign In</div>
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

export default connect(mapStateToProps)(AdminSignUp);
