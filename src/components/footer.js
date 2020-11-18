import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="footer">
                <div className="footerContent">
                    <ul>
                        <li><a><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                        <li><a><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                        <li><a><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    </ul>
                    <p className="footerText" style={{margin: `0px`}}>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer