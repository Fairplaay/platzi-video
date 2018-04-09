import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
class VideoPlayer extends Component {
  render () {
    return (
      <div>
        <VideoPlayerLayout>
          <video
            controls
            autoPlay
            src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
          />
        </VideoPlayerLayout>
      </div>
    )
  }
}

export default VideoPlayer
