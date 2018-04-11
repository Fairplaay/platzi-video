import React, { Component } from 'react'
import './video.css'
class Video extends Component {
  constructor (props) {
    super(props)
    this.togglePlay = this.togglePlay.bind(this)
    this.setRef = this.setRef.bind(this)
  }
  togglePlay () {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  componentWillReceiveProps (nextprops) {
    if (nextprops.pause !== this.props.pause) {
      this.togglePlay()
    }
  }
  setRef (element) {
    this.video = element
  }
  render () {
    const {
      handleMetaData,
      handleTimeUpdate
    } = this.props
    return (
      <div>
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleMetaData}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    )
  }
}

export default Video
