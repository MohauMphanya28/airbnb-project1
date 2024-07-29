import React from 'react'
import "./Home.css"
import Header from './Header'
import Booking from './Booking'
import villa from "../images/villa.jpg"


const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Booking />
      <div className='card'> 
        <img src={villa} alt='house' className='villa'/>
        <div className='text'>
          Not sure where to go? Perfect!
          <button className='btn'>I'm flexible!</button>
        </div>
      </div>
    </div>
  )
}

export default Home
