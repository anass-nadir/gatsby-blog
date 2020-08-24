const {
  createFilePath
} = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions
  //create slug field for posts
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: 'slug',
      node,
      value: `/posts${value}`
    })
  }
}

exports.createPages = async ({
  graphql,
  actions,
  reporter
}) => {
  const {
    createPage
  } = actions

  const result = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { status: { ne: "draft" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          node {
            id
            fields {
              slug
            }
          }
        }
          group(field: frontmatter___category) {
            fieldValue
          }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  const categories = result.data.allMdx.group
  posts.forEach(({
    node,
    previous,
    next
  }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("src/templates/post.jsx"),
      context: {
        id: node.id,
        prev: index === 0 ? null : previous,
        next: index === posts.length - 1 ? null : next
      }
    })
  })
  categories.forEach(category => {
    createPage({
      path: `/category/${category.fieldValue}/`,
      component: path.resolve("src/templates/category.jsx"),
      context: {
        category: category.fieldValue
      }
    })
  })
}