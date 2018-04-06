import React from 'react'
import Category from './category'
import './categories.css'
const Categories = (props) => (
  <div className='categories'>
    {
      props.categories.map(item => {
        return <Category key={item.id} {...item} />
      })
    }
  </div>
)

export default Categories
