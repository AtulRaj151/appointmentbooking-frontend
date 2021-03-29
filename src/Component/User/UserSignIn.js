import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../../Action/auth";

class UserSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  handleFormSubmit = (e) => {
    const { email, password } = this.state;

    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };

  render() {
    const { isLoggedin } = this.props.state.auth;
    if (isLoggedin) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="usersignin">
        <div className="auth-container">
          <div className="auth-header">Sign In</div>
          <div className="input-container" style={{ height: "48%" }}>
            <input
              type="email"
              className="input-field"
              placeholder="email"
              onChange={(e) => this.handleInputChange("email", e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              onChange={(e) =>
                this.handleInputChange("password", e.target.value)
              }
            />
          </div>
          <button
            className="btn-submit"
            onClick={() => this.handleFormSubmit()}
          >
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
