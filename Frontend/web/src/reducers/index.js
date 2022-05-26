import { combineReducers } from "redux";
import auth from "./auth";
import cities from "./cities";
import locations from "./locations";
import semesters from "./semesters";
import pickuppoints from "./pickuppoints";

export default combineReducers({
  auth,
  locations,
  semesters,
  pickuppoints,
  cities
});
