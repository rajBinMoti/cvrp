import axios from "axios";
import {
    // ADD_LOCATION,
    LOCATION_LOADING,
    LOCATION_ERROR,
    LOADED_LOCATIONS
} from './types';
import { url } from "../helpers/url";

export const loadLocations = () => (dispatch, getState) => {
    dispatch({ type: LOCATION_LOADING })
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `JWT ${token}`;
    }
    axios.get(`${url}/fleet/locations`, config)
        .then(res => {
            dispatch({
                type: LOADED_LOCATIONS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: LOCATION_ERROR
            });
        })
}