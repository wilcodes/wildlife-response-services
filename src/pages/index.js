import React from "react"
import Layout from "../components/layout"
import Home from "../components/Home/Home";
import "../bootstrap-grid.min.css";
import SEO from "../components/seo";
const IndexPage = () => (
        <Layout>
          <SEO title={"Wildlife Response Services"}/>
         <Home/>
        </Layout>

)

export default IndexPage
