import { combineReducers } from "redux";
import booking from "./booking";
import auth from "./auth";
export default combineReducers({
  booking,
  auth,
});
