import React from 'react'
import Playlist from '../../playlist/components/playlist.js'
import './category.css'
const Category = (props) => (
  <div className='Category'>
    <p className='Category-title'>{props.description}</p>
    <h2 className='Category-description'>{props.title}</h2>
    <Playlist
      playlist={props.playlist}
    />
  </div>
)

export default Category
