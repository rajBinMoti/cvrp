import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import axios from "axios";

// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

ReactDOM.render(<App />, document.getElementById("root"));
