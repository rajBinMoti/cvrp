import {
  LOCATION_ERROR,
  LOADED_LOCATIONS,
  LOCATION_LOADING
} from "../actions/types";

const initialState = {
  locations: null,
  isLoading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCATION_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOADED_LOCATIONS:
      return {
        ...state,
        isLoading: false,
        locations: action.payload
      };
    case LOCATION_ERROR:
      return {
        ...state,
        isLoading: false,
        locations: null,
      };
    default:
      return state;
  }
}
