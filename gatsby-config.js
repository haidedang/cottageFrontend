require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const fullConfig = resolveConfig(tailwindConfig);

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.cottagecoredream.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    // ...
    siteUrl,
    // other metadata
  },
  plugins: [
    {
      resolve: `gatsby-plugin-pinterest`,
      options: {
        // If you just want to use the default, you can set this to `true`, defaults to `false`
        // This sets the data-pin-hover attribute in the script
        saveButton: {
          // Set to true to hide the text and display only a round P button
          round: false, // default
          // Set to true to display a bigger button
          tall: true, // default
        },
 
      }
    },
    { 
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: [
          "/category/Lifestyle",
          "/category/Fashion",
          "/category/Community",
          "/category/Recipes",
          "/category/Nature",
          "/category/Knitting",
          "/category/Gardening",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.cottagecoredream.com",
        sitemap: "https://wwww.cottagecoredream.com/sitemap.xml",
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-7KM0NT19S7", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: "@debiki/gatsby-plugin-talkyard",
      options: {
        talkyardServerUrl: "https://comments.cottagecoredream.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL,
        contentTypes: ["article", "category", "writer"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `static/about.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};
