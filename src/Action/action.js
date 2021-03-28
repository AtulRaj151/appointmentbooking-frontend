import {
  SET_DASHBOARD_MENU,
  SET_MYBOOKING_MENU,
  SET_NEWBOOKING_MENU,
} from "./actionTypes";
export function setDashBoardMenu(val) {
  return {
    type: SET_DASHBOARD_MENU,
    val,
  };
}
export function setMyBookingMenu(val) {
  return {
    type: SET_MYBOOKING_MENU,
    val,
  };
}
export function setNewBookingMenu(val) {
  return {
    type: SET_NEWBOOKING_MENU,
    val,
  };
}
