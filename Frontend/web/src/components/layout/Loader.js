import React, { Component } from 'react'
import Loading from 'react-fullscreen-loading';


export default class Loader extends Component {
    render() {
        return (
            <Loading loading  loaderColor="#3498db" />
        )
    }
}

