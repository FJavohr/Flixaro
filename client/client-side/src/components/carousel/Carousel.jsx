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
import Genres from '../genres/Genres';
// import CircleRating from "../circleRating/CircleRating";

const Corousel = ({data, loading,endpoint, title} ) => {
  const carouselContainer = useRef();
  const {url} = useSelector((state) => state.home)
  // console.log(url)
  const navigate = useNavigate();
  // console.log(caroselContainer); 
  // console.log(data)
  const navigation = (dir) => { 
    const container = carouselContainer.current;

    const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20)

    container.scrollTo({
      behavior: "smooth",
      left: scrollAmount
    })

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

    // function hurma(){
    //   return this.style.animationPlayState = 'stop'
    // }

  return (
    <div className='carousel'> 
    {title && <div className="carouselTitle">{title}</div> }
    <ContentWrapper>
      <BsFillArrowLeftCircleFill
        className='carouselLeftNav arrow' 
        // onMouseOver={() => hurma()}
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
      className='carouselRightNav arrow' 
        onClick={() => navigation("right")}
      />
    {!loading ? 
    (
      <div className="carouselItems" 
      ref={carouselContainer}
      >
        {data?.map(({id, genre_ids, poster_path, title, name, media_type, release_Date, vote_average}) => {
          const posterUrl = poster_path ? url.poster + poster_path : (<div>U have some problems</div>)
          return (
            <div className="carouselItem" key={id} onClick={() => navigate(`/${media_type || endpoint}/${id}`)}>
              <div className="posterBlock">
                <Img src={posterUrl} />
                {/* fixed - округляет до определённых десятков  */}
                <CircleRating rating={vote_average.toFixed(1)}/>
                <Genres data={genre_ids.slice(0,2) } />
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