import {
  CITY_ERROR,
  LOADED_CITIES,
  CITY_LOADING
} from "../actions/types";

const initialState = {
  cities: null,
  isLoading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CITY_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOADED_CITIES:
      return {
        ...state,
        isLoading: false,
        cities: action.payload
      };
    case CITY_ERROR:
      return {
        ...state,
        isLoading: false,
        cities: null,
      };
    default:
      return state;
  }
}
