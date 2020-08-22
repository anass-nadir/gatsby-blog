import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group'


const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0
  },
  entered: {
    transition: 'opacity 300ms ease-in-out',
    opacity: 1
  },
  exiting: {
    transition: 'opacity 300ms ease-out',
    opacity: 0
  }
}


export const Transition = ({
  children,
  pathname
}) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={pathname}
        timeout={{
          enter: 300,
          exit: 300
        }}
      >
        {status => (
          <div
            style={{
              ...getTransitionStyles[status]
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}
