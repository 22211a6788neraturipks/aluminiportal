import React, { useEffect, useState } from 'react';
import car1 from '../../assets/carousel/car1.jpg';
import car2 from '../../assets/carousel/car2.jpg';
import car3 from '../../assets/carousel/car3.jpg';
import car4 from '../../assets/carousel/car4.jpg';
import car5 from '../../assets/carousel/car5.jpg';
import getBroswer from '../utils/getBrowser';
import '../styles/carousel.css';
import Carousel_Item from './carousel_components/Carousel_item';
function Carousel() {
  const [browser,setBrowser] = useState();
  useEffect(()=>{
    setBrowser(getBroswer());
  })
  return (
<div className={`carousel-container flex justify-center mt-[10px] min-h-screen overflow-hidden ${browser === 'chrome' ? 'chrome-window-carousel' : ''} ${browser === 'edge' ? 'edge-window-carousel' : ''} ${browser === 'brave' ? 'brave-window-carousel' : ''}`}>
  <div className="carousel rounded-box w-full h-full relative overflow-y-hidden">
      <Carousel_Item image={car1} title={"Carousel Title 1"} description={"Description"}></Carousel_Item >
      <Carousel_Item image={car5} title={"Carousel Title 2"} description={"Description"}></Carousel_Item >
      <Carousel_Item image={car3} title={"Carousel Title 3"} description={"Description"}></Carousel_Item >
      <Carousel_Item image={car4} title={"Carousel Title 4"} description={"Description"}></Carousel_Item >
      <Carousel_Item image={car5} title={"Carousel Title 5"} description={"Description"}></Carousel_Item >
      <Carousel_Item image={car1} title={"Carousel Title 6"} description={"Description"}></Carousel_Item >
  </div>
</div>
  )
}

export default Carousel
