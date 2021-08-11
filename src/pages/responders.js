import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Responders from "../components/Responders/Responders"
import ImageSlider from "../components/Mission/Carousel/ImageSlider"

const responders = () => (

  <Layout>
    <SEO title={"Responders"}/>
   <Responders/>
  </Layout>

)

export default responders;
