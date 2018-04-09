import React from 'react'
import Category from './category'
import './categories.css'
import SearchContainer from '../../widgets/containers/search'
const Categories = (props) => (
  <div className='categories'>
    <SearchContainer />    {
      props.categories.map(item => (
        <Category key={item.id} {...item} handleOpenModal={props.handleOpenModal} />

      ))
    }
  </div>
)

export default Categories
