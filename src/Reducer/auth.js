import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_START,
  LOG_OUT,
  AUTHENTICATE_USER,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from "../Action/actionTypes";

const inititalState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false,
};
export default function auth(state = inititalState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        error: null,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        // inProgress: false,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };

    default:
      return state;
  }
}
