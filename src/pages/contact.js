import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import Contact from "../components/Contact/Contact";

const contact = () => (
    <Layout>
      <SEO title={"Contact Page"}/>
        <Contact/>
    </Layout>

)

export default contact
