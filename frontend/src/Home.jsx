import React from 'react'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'

function Home() {
  return (
    <div className='h-[3600px] bg-white'>
        <NavBar />
        <Carousel />
    </div>
  )
}

export default Home
