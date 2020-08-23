/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import { HomeLink } from '../HomeLink';
import { SideBarNavList } from './SideBarNavList';

export const SideBar = ({ links, isNavOpen }) => {
  const conditionalLeft = isNavOpen ? 0 : 300;

  return (
    <Styled.div
      sx={{
        position: 'absolute',
        height: '100%',
        backgroundColor: 'background',
        borderRightWidth: 0,
        borderRightStyle: 'solid',
        borderRightColor: 'surface',
        width: '300px',
        left: [
          `-${conditionalLeft}px`,
          `-${conditionalLeft}px`,
          `-${conditionalLeft}px`,
          '0px'
        ],
        transition: '.3s ease-in-out left'
      }}
    >
      <Styled.div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pl: 4,
          pr: 4,
          height: '100%'
        }}
      >
        <Styled.div
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: 60,
            pt: 1,
            pl: 4
          }}
        >
          <HomeLink />
        </Styled.div>
        <Styled.div
          sx={{
            display: 'flex',
            pt: 3,
            flexDirection: 'column',
            flexBasis: '100%',
            overflowY: 'auto',
            WbkitOverflowScrolling: 'touch'
          }}
        >
          <SideBarNavList links={links} />
          <Styled.div
            sx={{
              pl: 3,
              pr: 3,
              pt: 6,
              mb: 4,
              display: ['flex', 'flex', 'flex', 'none'],
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          ></Styled.div>
        </Styled.div>
      </Styled.div>
    </Styled.div>
  );
};
