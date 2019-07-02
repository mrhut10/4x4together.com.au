module.exports = {
  siteMetadata: {
    title: `4x4 Together`,
    description: `Website meta description for SEO.`,
    siteUrl: `https://www.phirannodesigns.com.au`, // used for `gatsby-plugin-sitemap` to generate correct URLs
    author: ``, // e.g. @phirannodesigns — used for twitter cards in SEO component
    facebook: `https://www.facebook.com/4x4together`,
    instagram: `https://www.instagram.com/4x4together`,
    twitter: `https://twitter.com/4x4together`,
    youtube: `https://www.youtube.com/channel/UCsR03-p26KNsjNDFOeszueg`,
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
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-robots-txt`,
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
