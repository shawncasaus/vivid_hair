import Vertical_Nav_Hamburger from "./vertical-nav-hamburger"
import React from "react"


class VerticalNav extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
          navWidth: "0%"
        }

        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)

    }

    openNav = (e) => {
      e.preventDefault();
      this.setState({navWidth: "100%"})
    }

    closeNav = (e) => {
        e.preventDefault();
        this.setState({navWidth: "0%"})
    }

    render () {
        return(
            <div className="vertical-nav">
                <div id="myNav" className="overlay" style={{width: this.state.navWidth}}>
                    <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
                
                    //Overlay content
                    <div className="overlay-content">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

                <h1 onClick={this.openNav} style={{cursor: "pointer", marginBottom: 0}}><Vertical_Nav_Hamburger /></h1>
            </div>
        )
    }
}

export default VerticalNav