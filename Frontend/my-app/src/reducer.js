import axios from "axios";

export function getCities(token, url) {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `JWT ${token}`;
    }
    return axios.get(`${url}/fleet/cities/`, config)
        .then(res => res.data)
        .catch(err => "ERROR")
}

export function getSemesters(token, url) {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `JWT ${token}`;
    }
    return axios.get(`${url}/fleet/semesters/`, config)
        .then(res => res.data)
        .catch(err => "ERROR")
}

export function getLocations(token, url) {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `JWT ${token}`;
    }
    return axios.get(`${url}/fleet/locations/`, config)
        .then(res => res.data)
        .catch(err => "ERROR")
}

export function getPickUpPoints(token, url) {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `JWT ${token}`;
    }
    return axios.get(`${url}/fleet/pickuppoints/`, config)
        .then(res => res.data)
        .catch(err => "ERROR")
}