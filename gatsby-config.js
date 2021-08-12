module.exports = {
  siteMetadata: {
    title: `Wildlife Response Services`,
    titleTemplate:"Oils Spills Experts",
    description: `Wildlife Response Services, LLC provides dedicated oiled wildlife response support for the Gulf of Mexico coast and inland gulf coast states. 
    We are based in the Houston/Galveston area, but our core network team consisting of trained responders, 
    is capable of being dispatched at a moments notice to any incident involving wildlife throughout the United States. Wildlife Response Services, 
    LLC has a number of uniquely qualified wildlife responders and maintains a database of additional on-call contract personnel to assist with an incident, regardless of size or scope.`,
    author: `Rhonda Murgatroyd`,
    siteUrl: "http://www.wildliferesponse.net",
    social: {
      twitter:"RhondaM"
    }

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/white-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
