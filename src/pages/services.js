import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import Services from "../components/services/Services";
const services = () => (
    <Layout>
      <SEO title={"Services"}/>
        <Services/>
    </Layout>

)

export default services
