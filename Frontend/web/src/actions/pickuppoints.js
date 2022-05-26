import axios from "axios";
import {
    // ADD_PICKUPPOINTS,
    PICKUPPOINTS_LOADING,
    PICKUPPOINTS_ERROR,
    LOADED_PICKUPPOINTS
} from './types';
import { url } from "../helpers/url";

export const loadPickuppoints = () => (dispatch, getState) => {
    dispatch({ type: PICKUPPOINTS_LOADING })
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `JWT ${token}`;
    }
    axios.get(`${url}/fleet/pickuppoints`, config)
        .then(res => {
            dispatch({
                type: LOADED_PICKUPPOINTS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: PICKUPPOINTS_ERROR
            });
        })
}