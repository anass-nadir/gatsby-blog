/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Img from 'gatsby-image'

import { Tag } from '../components/Tag'
import { Seo } from '../components/Seo'
import { YouTube } from '../components/YouTube'
import { ButtonIcon } from '../components/ButtonIcon'

import { formatDate, colorRange } from '../utils'


const components = {
      YouTube: (props) => <YouTube {...props} />,
      wrapper: ({ children }) => <Fragment>{children}</Fragment>
}

const Post = ({ data: { mdx, site }, pageContext }) => {
      const context = useThemeUI()
      const { body, excerpt, fields } = mdx
      const { title, date, tags, featuredImage } = mdx.frontmatter
      const { next, prev } = pageContext
      const colorScale = colorRange(
            context.theme.colors?.primary,
            context.theme.colors?.secondary,
            tags ? tags.length : 0
      )

      return (
            <article
                  sx={{
                        mb: 5
                  }}
            >
                  <Seo
                        title={`${site.siteMetadata.title} | ${title}`}
                        description={excerpt}
                        keywords={tags || []}
                        path={fields.slug}
                        image={
                              featuredImage
                                    ? featuredImage.childImageSharp.fluid.src.replace('/', '')
                                    : ''
                        }
                        article={true}
                  />
                  {featuredImage && (
                        <Styled.div
                              sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                    overflow: 'hidden',
                                    mb: 4
                              }}
                        >
                              <Img
                                    fluid={featuredImage.childImageSharp.fluid}
                                    alt={title}
                                    style={{
                                          display: 'block',
                                          width: '100%',
                                          height: '100%'
                                    }}
                              />
                        </Styled.div>
                  )}
                  <Styled.div
                        sx={{
                              fontSize: 2,
                              fontFamily: 'body',
                              color: 'secondary',
                              mb: 3
                        }}
                  >
                        {title && <Styled.h1>{title}</Styled.h1>}

                        {date && formatDate(date)}
                  </Styled.div>
                  <ul
                        sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              p: 0,
                              mt: 4,
                              mb: 3,
                              '> :nth-of-type(n)': {
                                    mr: 2
                              }
                        }}
                  >
                        {tags &&
                              tags.map((tag, index) => (
                                    <Tag key={index} color={colorScale[index]}>
                                          {tag}
                                    </Tag>
                              ))}
                  </ul>
                  <MDXProvider components={components}>
                        <MDXRenderer>
                              {body}
                        </MDXRenderer>
                  </MDXProvider>

                  <Styled.div
                        sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              mt: 5,
                              a: {
                                    ':focus': {
                                          outline: 'none'
                                    }
                              }
                        }}
                  >
                        <span>
                              {prev && (
                                    <Link to={prev.fields.slug} tabIndex={-1}>
                                          <ButtonIcon iconPath="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                                    </Link>
                              )}
                        </span>
                        <span>
                              {next && (
                                    <Link to={next.fields.slug} tabIndex={-1}>
                                          <ButtonIcon iconPath="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                    </Link>
                              )}
                        </span>
                  </Styled.div>
            </article>
      )
}
Post.propTypes = {
      data: PropTypes.shape({
        mdx: PropTypes.shape({
          edges: PropTypes.arrayOf(
            PropTypes.shape({
              node: PropTypes.shape({
                frontmatter: PropTypes.shape({
                  title: PropTypes.object.isRequired,
                  featuredImage: PropTypes.object.isRequired,
                  date: PropTypes.string.isRequired
                }),
                fields: PropTypes.shape({
                  slug: PropTypes.string.isRequired
                }),
                excerpt: PropTypes.string.isRequired,
                body: PropTypes.object.isRequired
              })
            }).isRequired
          )
        })
      })
    };
export const contentQuery = graphql`
  query postQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        tags
        status
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(quality: 90) {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
export default Post
