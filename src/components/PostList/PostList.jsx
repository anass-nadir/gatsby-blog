/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Flex, Box, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import { Post } from '../Post'

export const PostList = ({ listItems }) => {
  return (
    <Fragment>
      <Styled.div
        sx={{
          mb: 4
        }}
      />
      <Flex
        sx={{
          flexWrap: 'wrap',
          '> :nth-of-type(odd)': {
            pr: [0, 0, 4]
          }
        }}
      >
        {listItems.map((item, index) => {
          const { slug } = item.node.fields
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                width: ['100%', '100%', '50%']
              }}
            >
              <Styled.div
                sx={{
                  display: 'flex',
                  flex: '1 1 auto',
                  textDecoration: 'none',
                  borderRadius: 1,
                  mb: 4,
                  ':focus': {
                    outline: 'none',
                    boxShadow: theme =>
                      `${theme.shadows[0]} ${theme.colors.textMuted}`
                  }
                }}
              >
                <Link
                  to={slug}
                  sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mb: 4,
                    ':focus': {
                      outline: 'none',
                      boxShadow: theme =>
                        `${theme.shadows[0]} ${theme.colors.textMuted}`
                    }
                  }}
                >
                  <Post {...item} />
                </Link>
              </Styled.div>
            </Box>
          )
        })}
      </Flex>
    </Fragment>
  )
}
