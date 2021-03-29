import { getAuthTokenfromLocalStorage, getFormBody } from "../Helper/utils";
import {
  FETCH_APPOINTMENT_SUCCESS,
  APPOINTMENT_SUCCESS,
  APPOINTMENT_FAILED,
  IS_NOT_AVAILABLE,
} from "./actionTypes";

export function fetchUserAppointments() {
  return function (dispatch) {
    const url = "http://localhost:8001/api/v1/user/mybooking";
    fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenfromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data.data);
        dispatch(fetchAppointmentSucces(data.data));
      });
  };
}

export function fetchAppointmentSucces(booking) {
  return {
    type: FETCH_APPOINTMENT_SUCCESS,
    booking,
  };
}

export function check(date, time) {
  return (dispatch) => {
    const url = "http://localhost:8001/api/v1/user/check";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenfromLocalStorage()}`,
      },
      body: getFormBody({ date, time }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data sent to", data);

        if (data.message === "success") {
          //dispatch action to save user
          dispatch(checkAvailable(true));
          return;
        }
        dispatch(checkAvailable(false));
      });
  };
}
function checkAvailable(val) {
  return {
    type: IS_NOT_AVAILABLE,
    val,
  };
}
function appointmentSuccess(val) {
  return {
    type: APPOINTMENT_SUCCESS,
    val,
  };
}
function appointmentFailed(val) {
  return {
    type: APPOINTMENT_FAILED,
    val,
  };
}
export function book(date, time) {
  return (dispatch) => {
    const url = "http://localhost:8001/api/v1/user/book";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenfromLocalStorage()}`,
      },
      body: getFormBody({ date, time }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data sent to", data);

        if (data.message === "success") {
          //dispatch action to save user
          dispatch(appointmentSuccess(true));
          return;
        }
        dispatch(appointmentFailed(true));
      });
  };
}
