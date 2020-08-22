/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const commonStyles = {
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
  paddingTop: 2
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
