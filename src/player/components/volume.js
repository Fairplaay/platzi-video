import React from 'react'
import './volume.css'
import {Volumen} from '../../icons/components/play'
const Volume = (props) => {
  return (
    <button className='Volume'>
      <Volumen
        color='white'
        size={25}
      />
      <div className='Volume-range'>
        <input
          type='range'
          min={0}
          max={1}
          step={0.05}
          onChange={props.handleVolumenChange}
        />
      </div>
    </button>
  )
}

export default Volume
