import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/video.js'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-control'
import ProgressBar from '../components/progress_bar'
class VideoPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pause: true,
      duration: 0,
      currentTime: 0
    }
    this.togglePlay = this.togglePlay.bind(this)
    this.handleMetaData = this.handleMetaData.bind(this)
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    this.handleProgressChange = this.handleProgressChange.bind(this)
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
  render () {
    return (
      <div>
        <VideoPlayerLayout>
          <Title title='Esto es un video' />
          <Controls>
            <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
            <Timer currentTime={this.state.currentTime} duration={this.state.duration} />
            <ProgressBar handleProgressChange={this.handleProgressChange} value={this.state.currentTime} duration={this.state.duration} />
          </Controls>
          <Video
            handleTimeUpdate={this.handleTimeUpdate}
            handleMetaData={this.handleMetaData}
            autoplay={this.props.autoplay}
            pause={this.state.pause}
            src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
          />
        </VideoPlayerLayout>
      </div>
    )
  }
}

export default VideoPlayer
