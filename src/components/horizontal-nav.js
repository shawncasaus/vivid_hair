import Vertical_Nav_Hamburger from "./vertical-nav-hamburger"
import React from "react"


class HorizontalNav extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return(
            <div className="horizontal-nav" style={{display: "block"}}>
                <div className="horizontal" style={{width: "100%", display: "block", textAlign: "center"}}>
                    <ul className="nav horizontal-content" style={{float: "right"}}>
                        <li  className="nav-item"><a href="#" style={{verticalAlign: "center"}}>About</a></li>
                        <li  className="nav-item"><a href="#" style={{verticalAlign: "center"}}>Services</a></li>
                        <li  className="nav-item"><a href="#" style={{verticalAlign: "center"}}>Clients</a></li>
                        <li  className="nav-item"><a href="#" style={{verticalAlign: "center"}}>Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HorizontalNav