import React from "react"
import { Link } from "gatsby"
  
import Layout from "../components/layout"
import Vivid_Image from "../components/vivid-image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Footer from "../components/footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
library.add(fab, faFacebook, faInstagram, faLinkedin);

const IndexPage = () => (
  <Layout style={{padding: 0, margin: 0}}>
    <SEO title="Home" />
    <Hero />

    <div className="bodyDiv">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <p>Now go build something great!</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Vivid_Image />
      </div>
      
      <Link to="/page-2/">Go to page 2</Link> <br />
    </div>

    <Footer />
  </Layout>
)

export default IndexPage
