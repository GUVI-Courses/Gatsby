/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `hello-world`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-HCPJJGZRHQ", // Google Analytics / GA
        ],
      },
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data.json",
      },
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: "Products",
      },
    },
  ],
};
