import axios from "axios";
import {
    // ADD_CITY,
    LOADED_CITIES,
    CITY_LOADING,
    CITY_ERROR
} from './types';
import { url } from "../helpers/url";

export const loadCities = () => (dispatch, getState) => {
    dispatch({ type: CITY_LOADING })
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `JWT ${token}`;
    }
    axios.get(`${url}/fleet/cities/`, config)
        .then(res => {
            dispatch({
                type: LOADED_CITIES,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: CITY_ERROR
            });
        })
}