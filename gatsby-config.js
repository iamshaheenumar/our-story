module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Our Story",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:100,400`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Our Story`,
        short_name: `Our Story`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#64ffda`,
        display: `standalone`,
        icon: "./src/images/icon.png",
        cache_busting_mode: "none",
      },
    },
    `gatsby-plugin-offline`,
  ],
};
