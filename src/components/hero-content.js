import React from 'react'
import PropTypes from "prop-types"

class Hero_Content extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
        <div className="hero-content row" style={{top: "50%", marginRight: 0, marginLeft: 0}}>
            <div className="col-lg-12" style={{textAlign: "left, padding: 2rem"}}>
                <h1 className="arapey hero_h1" style={{fontWeight: "normal", fontStyle: "normal"}}>Serein C Hair Studio</h1>
                <ul className="xanh-mono hero_ul" style={{fontWeight: "normal", fontStyle: "normal"}}>
                  <li>Haircolor Specialist</li>
                  <li><a href="https://www.instagram.com/pravana/" className="hyperLink" style={{color: "#f7aed8"}} target="_blank">@pravana</a> artist</li>
                  <li>Vivids</li>
                  <li>Balayage</li>
                  <li>Silver Hair</li>
                  <li>Color Correction</li>
                  <li>Hair Extension</li>
                </ul>
                <button type="button" className="btn btn-primary heroButton" style={{}}><a className="arapey button">Book Now</a></button>
            </div>
        </div>
    )
  }
}

Hero_Content.propTypes = {
  height: PropTypes.number,
}

Hero_Content.defaultProps = {
  height: 720,
}

export default Hero_Content