import React from 'react'
import './Home.scss' 

import HeroBanner from './heroBanner/HeroBanner'
import Trending from './popular/Trending'

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner/>
      <Trending/>
    </div>
  )
}

export default Home