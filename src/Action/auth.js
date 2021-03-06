import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATE_USER,
} from "./actionTypes";

import { getAuthTokenfromLocalStorage, getFormBody } from "../Helper/utils";
import jwtDecode from "jwt-decode";

// signup
export function signup(email, password, name) {
  console.log("in Sign Up");
  return (dispatch) => {
    console.log("in Sign Up");
    const url = "http://localhost:8001/api/v1/user/signup";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
        name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);

        if (data.message === "success") {
          dispatch(signupSuccessful(true));
          return;
        }

        dispatch(signupFailed(data.message));
      });
  };
}
export function startSingup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
export function finishSignUp(user) {
  return {
    type: "SIGNUP_FINISH",
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = "http://localhost:8001/api/v1/user/signin";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);

        if (data.message === "success") {
          //dispatch action to save user

          localStorage.setItem("token", data.token);
          let user = jwtDecode(data.token);
          dispatch(loginSuccess(user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}
