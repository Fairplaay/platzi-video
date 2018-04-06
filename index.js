import React from 'react'
import ReactDOM from 'react-dom'
import Playlist from './src/playlist/components/playlist'
import data from './src/api.json'

const app = document.getElementById('app')

// que voy a renderizar y donde lo hare
ReactDOM.render(<Playlist data={data} />, app)
