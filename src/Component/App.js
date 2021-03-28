import Header from "./Header";
import { DashBoard, NewBooking, MyBooking, UserSignUp } from "./User";
import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    console.log(this.props);
    const {
      isDashBoard,
      isMyBooking,
      isNewBooking,
      isLoggedIn,
      isLogout,
    } = this.props.state;

    return (
      <div className="App">
        {isLoggedIn && <Header />}
        {!isLoggedIn && <UserSignUp />}
        {isLoggedIn && isDashBoard && <DashBoard />}
        {isLoggedIn && isMyBooking && <MyBooking />}
        {isLoggedIn && isNewBooking && <NewBooking />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(App);
