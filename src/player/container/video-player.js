import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/video.js'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-control'
import ProgressBar from '../components/progress_bar'
import Spinner from '../components/spinner.js'
import Volume from '../components/volume.js'
import Fullscreen from '../components/fullscreen.js'
class VideoPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pause: true,
      duration: 0,
      currentTime: 0,
      loading: false
    }
    this.togglePlay = this.togglePlay.bind(this)
    this.handleMetaData = this.handleMetaData.bind(this)
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    this.handleProgressChange = this.handleProgressChange.bind(this)
    this.handleSeeking = this.handleSeeking.bind(this)
    this.handleseeked = this.handleseeked.bind(this)
    this.handleVolumenChange = this.handleVolumenChange.bind(this)
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this)
    this.setRef = this.setRef.bind(this)
  }
  togglePlay (ev) {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount () {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleMetaData (event) {
    this.video = event.target
    this.setState({duration: this.video.duration})
  }
  handleTimeUpdate (event) {
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange (event) {
    this.video.currentTime = event.target.value
  }
  handleSeeking () {
    this.setState({loading: true})
  }
  handleseeked () {
    this.setState({loading: false})
  }
  handleVolumenChange (event) {
    this.video.volume = event.target.value
  }
  handleFullScreenClick (ev) {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }
  setRef (el) {
    this.player = el
  }
  render () {
    return (
      <VideoPlayerLayout setRef={this.setRef} >
        <Title title={this.props.title} />
        <Controls>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
          <Timer currentTime={this.state.currentTime} duration={this.state.duration} />
          <ProgressBar handleProgressChange={this.handleProgressChange} value={this.state.currentTime} duration={this.state.duration} />
          <Volume handleVolumenChange={this.handleVolumenChange} />
          <Fullscreen handleFullScreenClick={this.handleFullScreenClick} />
        </Controls>
        <Spinner active={this.state.loading} />
        <Video
          handleSeeking={this.handleSeeking}
          handleseeked={this.handleseeked}
          handleTimeUpdate={this.handleTimeUpdate}
          handleMetaData={this.handleMetaData}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src={this.props.src} />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
