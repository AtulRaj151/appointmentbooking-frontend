import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
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
  handleFormSubmit = async (e) => {
    const { email, password } = this.state;

    if (email && password) {
      await this.props.dispatch(login(email, password));
      console.log(this.props.state.auth, "in sign in user");
      this.setState({
        user: "",
        password: "",
      });
    }
  };

  render() {
    const { isLoggedin } = this.props.state.auth;
    if (isLoggedin) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="usersignin">
        {isLoggedin && <Redirect to="/dashboard" />}
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
        <div className="auth-option">
          <p>Don't have a user account? </p>
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>
              Sign Up Now
            </span>
          </Link>
          <br />
          <p>Go to</p>{" "}
          <Link to="/admin/login">
            <span style={{ color: "blue", cursor: "pointer" }}>
              Admin Sign In
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
export default connect(mapStateToProps)(UserSignIn);
