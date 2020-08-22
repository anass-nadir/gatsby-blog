/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'

import { PostList } from './PostList'

export const PostListContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query listQuery {
          allMdx(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { status: { ne: "draft" } } }
          ) {
            edges {
              node {
                fileAbsolutePath
                excerpt(pruneLength: 100)
                frontmatter {
                  title
                  tags
                  date
                  featuredImage {
                    childImageSharp {
                      fluid {
                        aspectRatio
                        sizes
                        src
                        srcSet
                      }
                    }
                  } 
                }
              }
            }
          }
        }
      `}
      render={data => {
        const listItems = data.allMdx.edges.map(item => item)
        return (
          <PostList listItems={listItems} />
        )
      }}
    />
  )
}
