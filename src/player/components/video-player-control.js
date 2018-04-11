import React from 'react'
import './video-player-control.css'
const videoPlayerControls = (props) => {
  return (
    <div className='VideoPlayerControls'>
      {props.children}
    </div>
  )
}

export default videoPlayerControls
