import React from 'react'
import './VideoPopup.scss'
import ReactPlayer from 'react-player/youtube'

const VideoPopup = ({show, setShow, videoId, setVideoId}) => {
  
  const hidePopup = () => {
    setShow(false)
    setVideoId(null)
  }; 
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div 
       className="opacityLayer"
       onClick={hidePopup}
       >
  <div className="videoPlayer">
    <span className="closeBtn" onClick={hidePopup} >
      Close
    </span>
    <ReactPlayer
    url={`https://www.youtube.com/watch?v=${videoId}`}
    controls
    width="100%"
    hieght="100%"
    playing={false}
    >
    </ReactPlayer>
  </div>
      </div>
    </div>
  )
}

export default VideoPopup