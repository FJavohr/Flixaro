import React, { useRef } from 'react'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import backfall from '../../assets/backfall.png'
import './Carousel.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs';
import ContentWrapper from '../contentWrapper/ContentWrapper'
import Img from '../lazyLoadImage/img'
//заимпортировать изображение, которое будет появлятся при необнаружении в предоставленных данных

const Corousel = ({data, loading}) => {
  const caroselContainer = useRef();
  const {url} = useSelector((state) => state.home)
  const navigate = useNavigate();
  // console.log(caroselContainer); 
  console.log(data)
  const navigation = (dir) => { 
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
        {data?.map(({id, poster_path}) => {
          const posterUrl = poster_path ? url.poster + poster_path : (<div>U have some problems</div>)
          return (
            <div className="carouselItem" key={id}>
              <div className="posterBlock">
                <Img src={posterUrl} />
              </div>
            </div>
          )
        })}
      </div>
    ) 
    :
    (
      <span>Laoding .....................</span>
    )
     }
    </ContentWrapper>
    </div>
  )
}

export default Corousel