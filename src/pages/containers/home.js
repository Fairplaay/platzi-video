import React, { Component} from 'react'
import HomeLayout from '../components/home-layout.js'
import Categories from '../../categories/components/categories'
import Related from '../components/related-layout.js'
class Home extends Component {
  render () {
    return (
      <HomeLayout>
        <Related />
        <Categories categories={this.props.data.categories} />
      </HomeLayout>
    )
  }
}

export default Home
