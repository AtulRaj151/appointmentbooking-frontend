import {
  APPOINTMENT_FAILED,
  APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_SUCCESS,
  IS_NOT_AVAILABLE,
} from "../Action/actionTypes";
let initialState = {
  bookings: [],
  isLogout: false,
  isLoggedIn: true,
  inProgress: false,
  isBooked: false,
  isBookFail: false,
  isAvailable: true,
  error: null,
};

export default function appointments(state = initialState, action) {
  switch (action.type) {
    case FETCH_APPOINTMENT_SUCCESS:
      return {
        ...state,
        bookings: [...action.booking],
      };
    case APPOINTMENT_SUCCESS:
      return {
        ...state,
        isBooked: true,
        isBookFail: false,
      };
    case APPOINTMENT_FAILED:
      return {
        ...state,
        isBooked: false,
        isBookFail: true,
      };
    case IS_NOT_AVAILABLE:
      return {
        ...state,
        isAvailable: action.val,
      };

    default:
      return state;
  }
}
