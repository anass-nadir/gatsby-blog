/** @jsx jsx */
import { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import { Location } from '@reach/router'

import { Seo } from '../components/Seo'
import { ContentContainer } from '../components/Content'
import { Transition } from '../components/Transition'


const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query defaultQuery {
          site {
            siteMetadata {
              title
              description
              keywords
              siteURL
              siteImage
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          description,
          keywords,
          siteURL,
          siteImage
        } = data.site.siteMetadata

        return (
          <Fragment>
            <Global
              styles={css`
                body {
                  position: relative;
                  margin: 0;
                  min-height: 100%;
                  min-width: 320px;
                }
              `}
            />

            <Styled.div
              sx={{
                margin: '0 auto',
                backgroundColor: 'background'
              }}
            >
              <Location>
                {({ location }) => {
                  const { pathname } = location
                  return (
                    <Fragment>
                      <Seo
                        title={title}
                        description={description}
                        keywords={keywords}
                        siteURL={siteURL}
                        image={siteImage}
                      />
                      <ContentContainer>
                        <Transition pathname={pathname}>
                          <MDXProvider>
                            {children}
                          </MDXProvider>
                        </Transition>
                      </ContentContainer>
                    </Fragment>
                  )
                }}
              </Location>
            </Styled.div>
          </Fragment>
        )
      }}
    />
  )
}

export default Layout
