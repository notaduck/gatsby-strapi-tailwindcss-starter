require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Guldberglab`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["article"],
        singleTypes: ['about-page'],
        queryLimit: 1000,
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,

    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto Mono`,
    //         variants: [`400`, `700`]
    //       },
    //       {
    //         family: `Roboto`,
    //         subsets: [`latin`]
    //       },
    //       {
    //         family: 'Eczar',
    //         variants: ['400', '500']
    //       },
    //       {
    //         family: 'Merriweather',
    //         variants: ['300']
    //       }
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
