module.exports = {
  siteMetadata: {
    title: `Vivid Rein Hair`,
    description: `Boutique hair salon located in La Verne, California.`,
    author: `@shawncasaus`,
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
        background_color: `#695578`,
        theme_color: `#695578`,
        display: `minimal-ui`,
        icon: `src/images/vivid-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans Condensed`,
            variants: [`300`]
          },
          {
            family: `Pacifico`, 
            variants: [`400`]
          },
          {
            family: `Merriweather`,
            variants: [`400`]
          }
        ],
      },
    },
  ],
}
