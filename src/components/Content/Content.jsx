/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const commonStyles = {
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  m: 0,
  p: 0,
  minHeight: '100vh'
}


export const Content = ({ children }) => {

  return (
    <Styled.div
      sx={{
        ...commonStyles
      }}
    >
      <Styled.div
        sx={{
          ...commonStyles,
          paddingLeft: [3, 4],
          paddingRight: [3, 4],
          marginLeft: [0, 0, 0, '300px'],
          overflow: 'hidden',
          transition: theme => theme.sideBarTransition
        }}
      >
        {children}
      </Styled.div>
    </Styled.div>
  )
}
