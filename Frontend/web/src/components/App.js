import React, { Fragment, Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import './App.css'
import Main from "./Main";
import { loadUser } from "../actions/auth";
import { loadCities } from "../actions/cities";
import { loadLocations } from "../actions/locations";
import { loadSemesters } from "../actions/semesters";
import { loadPickuppoints } from "../actions/pickuppoints";

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    store.dispatch(loadCities());
    store.dispatch(loadLocations());
    store.dispatch(loadSemesters());
    store.dispatch(loadPickuppoints());
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Main />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
