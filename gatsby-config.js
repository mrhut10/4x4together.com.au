module.exports = {
  siteMetadata: {
    title: `Phiranno Designs Template`,
    description: `Website meta description for SEO.`,
    tagline: `No project is too much for our team`, // used in GraphQL query in Hero component
    email: `hello@phirannodesigns.com.au`, // used in GraphQL queries so address only needs to be entered in one place
    phone: `+61400000000`, // e.g. +61400000000
    phoneFormatted: `0400 000 000`, // e.g. 0400 000 000
    siteUrl: `https://www.phirannodesigns.com.au`, // used for `gatsby-plugin-sitemap` to generate correct URLs
    author: ``, // e.g. @phirannodesigns — used for twitter cards in SEO component
    facebook: `https://www.facebook.com/phirannodesigns`, // e.g. https://www.facebook.com/phirannodesigns — used in GraphQL queries so address only needs to be entered in one place
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://www.example.com`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3E8D90`,
        theme_color: `#3E8D90`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
