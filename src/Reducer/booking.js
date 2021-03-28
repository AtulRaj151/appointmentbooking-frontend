import {
  SET_DASHBOARD_MENU,
  SET_MYBOOKING_MENU,
  SET_NEWBOOKING_MENU,
} from "../Action/actionTypes";
let initialState = {
  bookings: [],
  isDashBoard: false,
  isMyBooking: false,
  isNewBooking: false,
  isLogout: false,
  isLoggedIn: true,
  inProgress: false,
  error: null,
};

export default function appointments(state = initialState, action) {
  switch (action.type) {
    case SET_DASHBOARD_MENU:
      return {
        ...state,
        isDashBoard: action.val,
        isMyBooking: false,
        isNewBooking: false,
      };
    case SET_MYBOOKING_MENU:
      return {
        ...state,
        isDashBoard: false,
        isMyBooking: action.val,
        isNewBooking: false,
      };
    case SET_NEWBOOKING_MENU:
      return {
        ...state,
        isDashBoard: false,
        isMyBooking: false,
        isNewBooking: action.val,
      };

    default:
      return state;
  }
}
