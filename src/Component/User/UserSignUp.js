import React, { Component } from "react";
import { connect } from "react-redux";
import { signup, startSingup } from "../../Action/auth";

class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  handleSignUp = () => {
    const { name, email, password } = this.state;
    console.log(this.state);
    if (name && email && password) {
      this.props.dispatch(startSingup());
      this.props.dispatch(signup(email, password, name));
    }
  };
  render() {
    const { isLoggedin, inProgress } = this.props.auth;
    console.log(this.props);
    return (
      <div className="user-sign-up">
        <div className="auth-container">
          <div className="auth-header">Sign Up</div>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              placeholder="Name"
              onChange={(e) => this.handleInputChange("name", e.target.value)}
            />
            <input
              type="email"
              className="input-field"
              placeholder="Email"
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
            onClick={() => this.handleSignUp()}
            disabled={inProgress}
          >
            <span className="btn-txt">Sign In</span>
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(UserSignUp);
