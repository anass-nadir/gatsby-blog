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
import { Header } from '../components/Header'
import { SideBarContainer, SideBarProvider, Overlay } from '../components/SideBar'


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
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          description,
          keywords,
          siteURL
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
              <SideBarProvider>
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
                        />
                        <Header />
                        <SideBarContainer />
                        <Overlay />
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
              </SideBarProvider>
            </Styled.div>
          </Fragment>
        )
      }}
    />
  )
}

export default Layout
