/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

export const SideBarNavItem = ({ value, count }) => (
  <Styled.div
    sx={{
      color: 'primary',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: 2,
      textTransform: 'capitalize',
      pt: 3,
      pb: 3,
      pl: 4,
      pr: 4,
      transition: '.2s linear background-color, .2s linear color',
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: (theme) => theme.fontWeights.body,
      lineHeight: 'normal',
      textDecoration: 'none',
      outline: 'none',
      ':hover': {
        color: 'secondary',
        backgroundColor: 'surface'
      }
    }}
  >
    {value}
    <Styled.strong
      sx={{
        fontSize: 10,
        fontFamily: 'body',
        color: 'textMuted',
        margin: '6px 0 0 6px'
      }}
    >{`${count} post${count > 1 ? 's' : null}`}</Styled.strong>
  </Styled.div>
);
