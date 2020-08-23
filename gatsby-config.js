module.exports = {
  siteMetadata: {
    title: "gatsby blog",
    description: "gatsby blog test",
    keywords: ["test", "gatsby"],
    siteURL: process.env.NODE_ENV == 'development' ? "http://localhost:8000" : "https://gatsby-blog-orcin.vercel.app",
    siteImage: ""
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/layouts/layout.jsx"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    }
  ]
}
