import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../api.json'
const app = document.getElementById('app')

// que voy a renderizar y donde lo hare
render(<Home data={data} />, app)
