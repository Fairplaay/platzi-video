import React, { Component } from 'react'
import Media from './media'

class Playlist extends Component {
  render () {
    const category = this.props.data.categories
    return (
      category.map(el => {
        let template =
          <div className='Playlist' key={el.id}>
            <h6>{el.description}</h6>
            <h2>
              {el.title}
            </h2>
            <div>
              {el.playlist.map((item) => {
                return <Media {...item} key={item.id} />
              })}
            </div>
          </div>
        return template
      })
    )
  }
}

export default Playlist
