import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Vivid_Image from "../components/vivid-image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout style={{padding: 0, margin: 0}}>
    <SEO title="Home" />
    <Hero />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site!</p>
    <p>Now go build something great!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Vivid_Image />
    </div>
    
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
