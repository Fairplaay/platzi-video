import React, { Component} from 'react'
import HomeLayout from '../components/home-layout.js'
import Categories from '../../categories/components/categories'
import Related from '../components/related-layout.js'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/container/video-player'
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }
  handleOpenModal () {
    this.setState({
      modalVisible: true
    })
  }

  handleCloseModal (ev) {
    this.setState({
      modalVisible: false
    })
  }
  render () {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <VideoPlayer autoplay />
          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <h1>ESto es un portal</h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home
