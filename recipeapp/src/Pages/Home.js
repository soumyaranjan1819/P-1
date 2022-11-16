import React from 'react'
import AutoPlay from '../Components/AutoPlay'
import Carousel from '../Components/Carousel'
import Category from '../Components/Category'
import Footer from '../Components/Footer'
import Trending from '../Components/Trending'

function Home() {
  return (
    <div>
      <Carousel/>
      {/* <Trending/> */}
      <Category/>
      <AutoPlay/>
      <Footer/>
    </div>
  )
}

export default Home