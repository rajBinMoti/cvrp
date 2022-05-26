import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import './App.css'
import Header from "./layout/Header";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { loadCities } from '../actions/cities';
import { loadLocations } from '../actions/locations';
import { loadPickuppoints } from '../actions/pickuppoints';
import { loadSemesters } from '../actions/semesters';
import Loader from "./layout/Loader";

export class Main extends Component {
    static propTypes = {
        cities: PropTypes.object.isRequired,
        locations: PropTypes.object.isRequired,
        pickuppoints: PropTypes.object.isRequired,
        semesters: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.props.loadCities();
        this.props.loadSemesters();
        this.props.loadPickuppoints();
        this.props.loadLocations();
    }

    render() {
        if (this.props.cities.isLoading ||
            this.props.isLoading ||
            this.props.semesters.isLoading ||
            this.props.pickuppoints.isLoading ||
            this.props.locations.isLoading
        ) {
            return <Loader />
        }

        return (
            <Router>
                <Header />
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute exact path="/dashboard"
                        component={() => <Dashboard
                            cities={this.props.cities}
                            locations={this.props.locations}
                            pickuppoints={this.props.pickuppoints}
                            semesters={this.props.semesters}
                        />} />
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    cities: state.cities,
    locations: state.locations,
    pickuppoints: state.pickuppoints,
    semesters: state.semesters,
})

export default connect(mapStateToProps,
    { loadCities, loadSemesters, loadPickuppoints, loadLocations })(Main);