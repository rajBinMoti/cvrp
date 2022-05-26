import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCities } from "../../actions/cities";
import { loadLocations } from "../../actions/locations";
import { loadSemesters } from "../../actions/semesters";
import { loadPickuppoints } from "../../actions/pickuppoints";
import Loader from '../layout/Loader';

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.setTable = this.setTable.bind(this)
        this.state = {
            table: 'CITIES'.toLowerCase()
        }
    }

    setTable(name) {
        this.setState({ table: name.toLowerCase() })
    }


    render() {
        if (
            this.props.cities.cities == null ||
            this.props.locations.locations == null ||
            this.props.semesters.semesters == null ||
            this.props.pickuppoints.pickuppoints == null
        ) {
            this.props.loadCities();
            this.props.loadSemesters();
            this.props.loadLocations();
            this.props.loadPickuppoints();
            return <Loader />
        }

        const ShowCard = (card) => {
            let color = null
            let icon = null
            if (Object.keys(card)[0].toUpperCase() === "CITIES") {
                color = "bg-success card text-center text-white"
                icon = "bi bi-stoplights display-5"
            }
            else if (Object.keys(card)[0].toUpperCase() === "LOCATIONS") {
                color = "bg-danger card text-center text-white"
                icon = "bi bi-geo-alt display-5"
            }
            else if (Object.keys(card)[0].toUpperCase() === "SEMESTERS") {
                color = "bg-warning card text-center text-white"
                icon = "bi bi-paperclip display-5"
            }
            else {
                color = "bg-info card text-center text-white"
                icon = "bi bi-collection display-5"
            }
            return <div className='col'>
                <div className={color}  >
                    <div className='card-header h4  '>
                        {card[Object.keys(card)[0]].length}
                    </div>
                    <div className='card-body py-4'>
                        <p>
                            {Object.keys(card)[0].toUpperCase()}
                        </p>
                        <i className={icon}></i>
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col h5 btn text-white' onClick={() => this.setTable(Object.keys(card)[0])}>
                                <i className="bi bi-view-list"></i>
                            </div>
                            {/* <div className='col'>
                                <i className="bi bi-cloud-plus"></i>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        }
        const ShowTable = () => {
            let name = this.state.table
            let header = Object.keys(this.props[name][name][0])
            let data = this.props[name][name]
            return <table className="table table-hover mt-2 table-striped caption-top">
                <caption className='display-5'>Data View {name.toUpperCase()}</caption>
                <thead>
                    <tr>
                        {
                            header.map((u, i) => {
                                return <th key={i} scope="col">{u.toUpperCase()}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, i) => {
                            return <tr key={i}>
                                {
                                    Object.values(row).map((r, j) => {
                                        if (r === true || r === false) {
                                            if (r === true)
                                                return <td key={j}>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" checked disabled id="defaultCheck1" />
                                                    </div>
                                                </td>
                                            else
                                                return <td key={j}>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" disabled id="defaultCheck1" />
                                                    </div>
                                                </td>
                                        }
                                        else{
                                            if (r === ''){
                                                return <td key={j}>{'....'}</td>
                                            }else{
                                                return <td key={j}>{r}</td>
                                            }
                                        }
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        }
        return (
            <main className="mt-5 pt-3">
                <div className='container'>
                    <div className='row'>
                        {ShowCard(this.props.cities)}
                        {ShowCard(this.props.locations)}
                        {ShowCard(this.props.pickuppoints)}
                        {ShowCard(this.props.semesters)}
                    </div>
                    <div className='row'>
                        {ShowTable()}
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    cities: state.cities,
    locations: state.locations,
    pickuppoints: state.pickuppoints,
    semesters: state.semesters,
});
export default connect(mapStateToProps, { loadCities, loadLocations, loadPickuppoints, loadSemesters })(Dashboard);
