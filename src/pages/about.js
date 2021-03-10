import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import About from "../components/About/About";
const aboutUs = () => (
    <Layout>
      <SEO title={"About Us"}/>
        <About/>
    </Layout>

)

export default aboutUs
