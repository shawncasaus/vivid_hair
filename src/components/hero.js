import React from 'react'
import scissors from '../images/vintage-scissors.png'
import Hero_Content from './hero-content'


class Hero extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const width = window.innerWidth
        const height = 720

        return (
            <div className="my-hero" style={{width: "auto", height: height}}>
                <div style={{margin: "auto", textAlign: "center", maxHeight: height}}>
                    <img className="vintage-scissors" src={scissors} alt="background image of black vintage scissors" style={{height: height}} />
                    <Hero_Content height={height} />
                </div>
            </div>
        )
    }
}

export default Hero
