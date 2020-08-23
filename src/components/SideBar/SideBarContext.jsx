import React, { createContext, useReducer } from 'react'

const initialState = { isNavOpen: false }

const reducer = (state, actions) => {
  switch (actions.type) {
    case 'openNav':
      return { ...state, isNavOpen: true }

    case 'closeNav':
      return { ...state, isNavOpen: false }

    default:
      return
  }
}

export const SideBarContext = createContext(initialState)

export const SideBarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <SideBarContext.Provider value={{ state, dispatch }}>
      {children}
    </SideBarContext.Provider>
  )
}
