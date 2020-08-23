/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby';
import { jsx, Styled } from 'theme-ui';
import { useContext, useState, useEffect } from 'react'
import { SideBarContext } from './SideBarContext'
import { SideBar } from './SideBar';

export const SideBarContainer = () => {
  const { state, dispatch } = useContext(SideBarContext)
  const [width, setWidth] = useState(null)
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return (
    <StaticQuery
      query={graphql`
      query pagesQuery {
        allMdx(filter: { frontmatter: { status: { ne: "draft" } } }) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `}
      render={(data) => {
        const links = data.allMdx.group
          .map((item) => {
            return {
              count: item.totalCount,
              value: item.fieldValue
            };
          })
          .sort((a, b) => a.value.localeCompare(b.value));

        return (
          <Styled.div
            onClick={() => dispatch({ type: 'closeNav' })}
            sx={{
              position: 'fixed',
              visibility: state.isNavOpen || width >= 1200 ? 'visible' : 'hidden',
              transition: '.2s linear visibility',
              top: 0,
              height: '100%',
              display: 'flex',
              flexBasis: 'auto',
              flexDirection: 'column',
              flexShrink: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              minHeight: 0,
              minWidth: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              width: '300px',
              zIndex: 2
            }}
          >
            <SideBar links={links} isNavOpen={state.isNavOpen} />
          </Styled.div>
        );
      }}
    />
  )
};
