import React, { useState } from 'react'
import './VideoSection.scss'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import VideoPopup from '../../../components/videoPopup/VideoPopup'
import Img from '../../../components/lazyLoadImage/img'
import { PlayIcon } from '../Playbtn'

const VideoSection = ({loading, data}) => {
  const [show, setShow] = useState(false)
  const [videoId, setVideoId] = useState(null)
  
  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    )
  }
  
  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map(({id, key}) => (
              <div key={id} className="videoItem"
              onClick={() => {
                setVideoId(key)
                setShow(true)
              }}
              >
                <div className="videoThumbnail">
                  <Img src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`} />
                  <PlayIcon/>
                </div>
              </div>
            ))}
          </div>
        )
        :
        (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )
        }
        <VideoPopup
        show={show}
         setShow={setShow}
         videoId={videoId}
         setVideoId={setVideoId}
         />
      </ContentWrapper>
    </div>
  )
}

export default VideoSection