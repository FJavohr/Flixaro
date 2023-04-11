import React, { useRef } from 'react'
import dayjs from 'dayjs';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'
import './Carousel.scss'
import { useSelector } from 'react-redux'
//заимпортировать изображение, которое будет появлятся при необнаружении в предоставленных данных
import Img from '../lazyLoadImage/img'
import backfall from '../../assets/backfall.png'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import CircleRating from '../circleRating/CircleRating';
// import CircleRating from "../circleRating/CircleRating";

const Corousel = ({data, loading}) => {
  const carouselContainer = useRef();
  const {url} = useSelector((state) => state.home)
  // console.log(url)
  const navigate = useNavigate();
  // console.log(caroselContainer); 
  console.log(data)
  const navigation = (dir) => { 

  } 

    const skItem = () => {
      return (
        <div className='skeletonItem' >
          <div className="posterBlock"></div>
          <div className="textBlock">
            <div className="title skeleton "></div>
            <div className="date skeleton "></div>
          </div>
        </div>
      )
    }

  return (
    <div className='carousel'> 
    <ContentWrapper>
      <BsFillArrowLeftCircleFill
        className='carouselLeftNav arrow' 
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
      className='carouselRightNav arrow' 
        onClick={() => navigation("right")}
      />
    {!loading ? 
    (
      <div className="carouselItems">
        {data?.map(({id, poster_path, title, name, release_Date, vote_average}) => {
          const posterUrl = poster_path ? url.poster + poster_path : (<div>U have some problems</div>)
          console.log(posterUrl)
          return (
            <div className="carouselItem" key={id}>
              <div className="posterBlock">
                <Img src={posterUrl} />
                {/* fixed - округляет до определённых десятков  */}
                <CircleRating rating={vote_average.toFixed(1)}/>
              </div>
              <div className="textBlock">
                <span className="title">
                  {title || name}
                </span>
                <span className="date">
                  {dayjs(release_Date).format("MMM D, YYYY")}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    ) 
    :
    (
     <div className="loadingSkeleton">
      {skItem()}
      {skItem()}
      {skItem()}
      {skItem()}
      {skItem()}
     </div>
    )
     }
    </ContentWrapper>
    </div>
  )
}

export default Corousel