/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

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
          <Styled.a
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
          </Styled.a>
        </Styled.li>
      );
    })}
  </Styled.ul>
);
