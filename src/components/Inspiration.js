import React from 'react';
import "./Inspiration.css";
import sandton from "../images/sandton.jpg"
import joburg from "../images/joburg-hotel.jpg"
import woodmead from "../images/woodmead.jpeg"
import hydePark from "../images/hydePark.jpeg"

const Inspiration = () => {
  return (
    <div className='inspiration'>
        <h1>Inspiration for your next trip</h1>
      <div className='cards'>
        <div className='city'>
            <img src={sandton} alt='city' className='city-img'/>
            <div className='city-info sandton'>
                <p className='hotel-name'>Sandton City Hotel</p>
                <p>53 km away</p>
            </div>
        </div>
        <div className='city'>
            <img src={joburg} alt='city' className='city-img'/>
            <div className='city-info joburg'>
            <p className='hotel-name'>Joburg City <br/> Hotel</p>
            <p>168 km away</p>
            </div>
        </div>
        <div className='city'>
            <img src={woodmead} alt='city' className='city-img'/>
            <div className='city-info woodmead'>
            <p className='hotel-name'>Woodmead City Hotel</p>
            <p>30 miles away</p>
            </div>
        </div>
        <div className='city hydePark'>
            <img src={hydePark} alt='city' className='city-img'/>
            <div className='city-info hyde-park'>
            <p className='hotel-name'>Hyde Park City Hotel</p>
            <p>34 km away</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Inspiration
