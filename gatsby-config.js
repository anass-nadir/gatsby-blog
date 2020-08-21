const path = require("path")

module.exports = {
  siteMetadata: {
    title: "gatsby blog",
    description: "gatsby blog test",
    keywords: ["test", "gatsby"],
    siteURL: "http://localhost:8000/",
    siteImage: ""
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: path.resolve(__dirname, `src/pages`),
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/layout.jsx')
      }
    },
  ],
}
