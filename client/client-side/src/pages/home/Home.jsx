import React from 'react'
import './Home.scss' 

import HeroBanner from './heroBanner/HeroBanner'
import Popular from './popular/Popular'

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner/>
      <Popular/>
    </div>
  )
}

export default Home