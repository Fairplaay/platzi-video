import React from 'react'
import './VideoPlayerLayout.css'
const VideoPlayerLayout = (props) => (
  <div 
    ref={props.setRef}
    className='VideoPlayer'>
    {props.children}
  </div>
)

export default VideoPlayerLayout
