import React, { Component } from 'react'
import { connect } from "react-redux";

export class Home extends Component {
    render() {
        return (
            <main className="mt-5 pt-3">
                {/* Add city, location, semester */}
            </main>
        )
    }
}

const mapStateToProps = state => ({
});
export default connect(mapStateToProps)(Home);