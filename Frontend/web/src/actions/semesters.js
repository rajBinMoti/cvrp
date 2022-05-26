import axios from "axios";
import {
    // ADD_SEMESTER,
    SEMESTER_LOADING,
    SEMESTER_ERROR,
    LOADED_SEMESTERS
} from './types';
import { url } from "../helpers/url";

export const loadSemesters = () => (dispatch, getState) => {
    dispatch({ type: SEMESTER_LOADING })
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `JWT ${token}`;
    }
    axios.get(`${url}/fleet/semesters`, config)
        .then(res => {
            dispatch({
                type: LOADED_SEMESTERS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: SEMESTER_ERROR
            });
        })
}