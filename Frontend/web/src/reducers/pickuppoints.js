import {
  PICKUPPOINTS_ERROR,
  LOADED_PICKUPPOINTS,
  PICKUPPOINTS_LOADING
} from "../actions/types";

const initialState = {
  pickuppoints: null,
  isLoading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PICKUPPOINTS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOADED_PICKUPPOINTS:
      return {
        ...state,
        isLoading: false,
        pickuppoints: action.payload
      };
    case PICKUPPOINTS_ERROR:
      return {
        ...state,
        isLoading: false,
        pickuppoints: null,
      };
    default:
      return state;
  }
}
