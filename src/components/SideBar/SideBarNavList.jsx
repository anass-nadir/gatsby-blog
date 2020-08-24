/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';
import { SideBarNavItem } from './SideBarNavItem';

export const SideBarNavList = ({ links }) => (
  <Styled.ul
    sx={{
      margin: 0,
      padding: 0
    }}
  >
    {links.map((link, index) => {
      const { value, count } = link;
      return (
        <Styled.li
          key={index}
          sx={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            a: {
              textDecoration: 'none'
            }
          }}
        >
          <Link
            to={`/category/${value}`}
            sx={{
              display: 'block',
              borderRadius: 2,
              cursor: 'pointer',
              mb: 3,
              padding: '0 2px',
              ':focus ': {
                outline: 'none',
                div: {
                  boxShadow: (theme) =>
                    `${theme.shadows[0]} ${theme.colors.textMuted}`
                }
              }
            }}
          >
            <SideBarNavItem value={value} count={count} />
          </Link>
        </Styled.li>
      );
    })}
  </Styled.ul>
);
