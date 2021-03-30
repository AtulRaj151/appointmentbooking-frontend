import Header from "./Header";
import {
  DashBoard,
  NewBooking,
  MyBooking,
  UserSignUp,
  UserSignIn,
} from "./User";
import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { getAuthTokenfromLocalStorage } from "../Helper/utils";
import jwtDecode from "jwt-decode";
import { authenticateUser, signup } from "../Action/auth";
import { fetchUserAppointments } from "../Action/action";
import AdminSignIn from "./Admin/AdminSignIn";
import AdminSignUp from "./Admin/AdminSignUp";

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin, path, component: Component } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var token = getAuthTokenfromLocalStorage();
    if (token) {
      var user = jwtDecode(token);
      console.log(user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
      this.props.dispatch(fetchUserAppointments());
    }
  }
  render() {
    console.log(this.props);
    const { auth } = this.props.state;
    const { isLoggedin } = this.props.state.auth;
    const { bookings } = this.props.state.booking;

    console.log("bookingfdsfsdf", isLoggedin);
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              // render={() => {
              //   return isLoggedin ? <DashBoard /> : <Redirect to="/login" />;
              // }}=
              component={UserSignIn}
            />
            <Route path="/signup" component={UserSignUp} />
            <Route path="/login" component={UserSignIn} />
            <Route path="/admin/signup" component={AdminSignUp} />
            <Route path="/admin/login" component={AdminSignIn} />
            <PrivateRoute
              path="/dashboard"
              component={DashBoard}
              isLoggedin={isLoggedin}
            />

            <PrivateRoute
              path="/newbooking"
              component={NewBooking}
              isLoggedin={isLoggedin}
            />
            <PrivateRoute
              path="/mybooking"
              component={MyBooking}
              isLoggedin={isLoggedin}
            />
          </Switch>
        </Router>
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
