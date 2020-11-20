import React from 'react'
import AboutContent from './about-content'

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="about">
                <AboutContent />
            </div>
        )
    }
}

export default About