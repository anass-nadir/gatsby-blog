/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const HomeLink = () => (
  <Link
    to="/"
    sx={{
      color: 'primary',
      width: '100%',
      textTransform: 'capitalize',
      transition: '.2s linear background-color, .2s linear color',
      fontFamily: 'body',
      textAlign:'center',
      fontSize: 2,
      fontWeight: theme => theme.fontWeights.bold,
      textDecoration: 'none',
      outline: 'none',
      ':hover': {
        color: 'secondary'
      }
    }}
  >
   HOME
  </Link>
)
