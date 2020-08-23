/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useContext } from 'react'
import { ButtonIcon } from '../ButtonIcon'
import { SideBarContext } from '../SideBar'

export const Header = () => {
  const { state, dispatch } = useContext(SideBarContext)
  return (
    <header
      sx={{
        position: 'sticky',
        top: 0,
        borderBottomWidth: 0,
        borderBottomStyle: 'solid',
        borderBottomColor: 'surface',
        marginBottom: 2,
        color: 'text',
        backgroundColor: 'background',
        paddingLeft: [3, 4],
        paddingRight: [3, 4],
        marginLeft: [0, 0, 0, '300px'],
        transition: theme => theme.sideBarTransition,
        zIndex: 1
      }}
    >
      <Styled.div
        sx={{
          display: 'flex',
          alignItems: 'center',
          minHeight: [
            60,
            60,
            60,
            0
          ]
        }}
      >
        <Styled.div
          sx={{
            display: ['flex', 'flex', 'flex', 'none']
          }}
        >
        </Styled.div>
        <Styled.div
          sx={{
            display: [
              `${state.isNavOpen ? 'none' : 'flex'}`,
              `${state.isNavOpen ? 'none' : 'flex'}`,
              `${state.isNavOpen ? 'none' : 'flex'}`,
              'none'
            ],
            justifyContent: 'flex-end',
            flexBasis: '100%'
          }}
        >
          <ButtonIcon
            onClick={() => dispatch({ type: 'openNav' })}
            iconPath="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </Styled.div>
        <Styled.div
          sx={{
            display: ['none', 'none', 'none', 'flex'],
            justifyContent: 'flex-end',
            flexBasis: '100%'
          }}
        >
        </Styled.div>
      </Styled.div>
    </header>
  )
}
