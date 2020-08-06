import React from 'react'
import scissors from '../images/vintage-scissors.png'


export class Hero extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const width = window.innerWidth
        const height = 720

        return (
            <div className="my-hero" style={{width: width, height: height}}>
                <div style={{margin: "auto", textAlign: "center", maxHeight: height}}>
                    <img className="vintage-scissors" src={scissors} alt="background image of black vintage scissors" style={{height: 720}} />
                </div>
            </div>
        )
    }
}

export default Hero
