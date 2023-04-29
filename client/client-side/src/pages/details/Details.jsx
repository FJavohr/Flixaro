import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.scss'
import DetailsBanner from './detailBanner/DetailsBanner';
import useFetch from '../../hooks/useFetch';
import Cast from './cast/Cast';
import VideoSection from './videosSection/VideoSection';
import Similar from './carousels/Similar';
import Recommedation from './carousels/Recommedation';


const Details = () => {

  const {mediaType, id } = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data: credits , loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)
  
  console.log(data?.results?.[0])

  return(
  <div>
    <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    <Cast data={credits?.cast} loading={creditsLoading} />
    <VideoSection data={data} loading={loading} />
    <Similar mediaType={mediaType} id={id} />
    <Recommedation mediaType={mediaType} id={id} />
  </div> 
  ) 
}


export default Details; 