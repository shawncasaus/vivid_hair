import React, {useState} from 'react'
import services from '../data/services'
import ScrollElement from './scroll-element'
import ScrollView from './scroll-view'

class Services extends React.Component {
    constructor(props) {
        super(props)
        console.log(services);
    }

    

    

    render() {

        return (
            <div className="services row">
                <div className="servicesContent col-lg-6">
                    <h1>This is the services section</h1>
                </div>
                <div className="servicesContent col-lg-6">
                    <h1>This is the services pricing section</h1>
                </div>
            </div>
        )
    }
}

export default Services