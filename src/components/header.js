import { Link } from "gatsby"
import PropTypes from "prop-types"
import VerticalNav from "./vertical-nav"
import HorizontalNav from "./horizontal-nav"
import Vivid_Image from "./vivid-image"
import React from "react"


const Header = ({ siteTitle }) => (
  <header
    className="sticky"
    style={{
      background: `#000`,
      padding: `0.6rem`,
      marginLeft: 0,
      marginRight: 0
    }}
  >
    <div className="row">
      <div
        className="col-6 vivid-logo"
        style={{
          margin: `auto`,
          maxWidth: 960,
          textAlign: `left`
        }}
      >
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <Vivid_Image />
        </Link>
      </div>
      <div className="col-6 nav-logo"
           style={{
             margin: `auto`,
             paddingRight: `25px`,
             textAlign: `right`,
           }}
      >
          <VerticalNav />
          <HorizontalNav />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
