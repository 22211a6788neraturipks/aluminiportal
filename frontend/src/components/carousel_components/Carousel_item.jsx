import React, { useEffect, useState } from 'react'
import getBroswer from '../../utils/getBrowser';
import './carousel_item.css';
function Carousel_Item({image,title,description}) {
  const[browser,setBrowser] = useState();
  useEffect(()=>{
    setBrowser(getBroswer());
  })
  return (
    <div className="carousel-item w-full h-full relative">
      <img
        src={image}
        className="w-full h-full object-cover"
        alt="Carousel component" />
        <div className={`absolute content-container ${browser==='chrome'? 'chrome-carousel-item':''} ${browser==='brave'? 'brave-carousel-item':''} ${browser==='edge'? 'edge-carousel-item':''}`}>
          <div className="w-full h-full title text-white text-4xl font-bold m-0">
            {title}
          </div>
          <div className="w-full h-full desc w-[200px] break-word  text-white text-xl" style={{maxWidth:`300px`,wordWrap:`break-word`}}>
            {description}
          </div>
        </div>
    </div>
  )
}

export default Carousel_Item
