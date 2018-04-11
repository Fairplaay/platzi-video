import React from 'react'
import { FullScreen } from '../../icons/components/play.js'
import './fullscreen.css'
const Fullscreen = (props) => {
  return (
    <div
      className='FullScreen'
      onClick={props.handleFullScreenClick}
    >
      <FullScreen size={25} color='white' />
    </div>
  )
}

export default Fullscreen
