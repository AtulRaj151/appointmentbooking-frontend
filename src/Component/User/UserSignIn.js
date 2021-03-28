import React, { Component } from "react";
import { connect } from "react-redux";

class UserSignIn extends Component {
  render() {
    return (
      <div className="usersignin">
        <div className="auth-container">
          <div className="auth-header">Sign Ip</div>
          <div className="input-container" style={{ height: "48%" }}>
            <input type="text" className="input-field" placeholder="Name" />
            <input type="email" className="input-field" placeholder="Email" />
          </div>
          <button className="btn-submit">
            <span className="btn-txt">Sign In</span>
          </button>
        </div>
        <div>
          <p>Don't have a user account?</p>
          <span>Sign Up Now</span>
          <br />
          <p>Go to</p> <span>Admin Sign In</span>
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
export default connect(mapStateToProps)(UserSignIn);
