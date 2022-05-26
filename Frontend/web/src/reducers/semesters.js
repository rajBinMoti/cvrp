import {
  SEMESTER_ERROR,
  LOADED_SEMESTERS,
  SEMESTER_LOADING
} from "../actions/types";

const initialState = {
  semesters: null,
  isLoading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEMESTER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOADED_SEMESTERS:
      return {
        ...state,
        isLoading: false,
        semesters: action.payload
      };
    case SEMESTER_ERROR:
      return {
        ...state,
        isLoading: false,
        semesters: null,
      };
    default:
      return state;
  }
}
