import React from 'react'
import './modal.css'
const Modal = (props) => {
  return (
    <div className='Modal'>
      Esto es un modal
      {props.children}
      <button onClick={props.handleClick}>cerrar</button>
    </div>
  )
}

export default Modal
