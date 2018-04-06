import React from 'react'

function Icons (props) {
  const {
    color, size
  } = props
  return (
    <svg fill={color} width={size} height={size} viewBox='0 0 32 32'>
      {props.children}
    </svg>
  )
}

export default Icons
