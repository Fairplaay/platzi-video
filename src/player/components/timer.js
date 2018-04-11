import React from 'react'
import './timer.css'

const lefPad = (num) => {
  const pad = '00'
  return pad.substring(0, pad.length - num.length) + num
}

const formattedTime = (secs) => {
  const minutes = parseInt(secs / 60, 10)
  const seconds = parseInt(secs % 60, 10)
  return `${minutes} : ${lefPad(seconds.toString())}`
}

const Timer = (props) => {
  return (
    <div className='Timer'>
      <p><span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span></p>
    </div>
  )
}

export default Timer
