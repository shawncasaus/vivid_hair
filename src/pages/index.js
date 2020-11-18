import React from "react"
import { Link } from "gatsby"
  
import Layout from "../components/layout"
import Vivid_Image from "../components/vivid-image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Services from "../components/services"
import Clients from "../components/clients"
import Contact from "../components/contact"
import Footer from "../components/footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
library.add(fab, faFacebook, faInstagram, faLinkedin);

const IndexPage = () => (
  <Layout style={{padding: 0, margin: 0}}>
    <SEO title="Home" />
    <Hero />
    <div className="bodyDiv">
      <About />
      <Services />
      <Clients />
      <Contact />
    </div>

    <Footer />
  </Layout>
)

export default IndexPage
