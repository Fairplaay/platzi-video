import React from 'react'
import './search.css'
const Search = (props) => (
  <div>
    <form action='' className='Search' onSubmit={props.handleSbmit}>
      <input
        ref={props.setRef}
        placeholder='Buscar'
        className='Search-input'
        type='text'
        name='search'
        onChange={props.handleChange}
        value={props.value}
      />
    </form>
  </div>
)

export default Search
