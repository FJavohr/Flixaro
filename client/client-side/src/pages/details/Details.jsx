import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.scss'
import DetailsBanner from './detailBanner/DetailsBanner';
import useFetch from '../../hooks/useFetch';

const Details = () => {

  const {mediaType, id } = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data: money , loading: moneyLoading} = useFetch(`/${mediaType}/${id}/credits`)
  
  return(
  <div>
    <DetailsBanner video={data?.results?.[0]} crew={money?.cre
    } />
  </div> 
  ) 
}


export default Details;