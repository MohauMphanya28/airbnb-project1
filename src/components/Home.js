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
        <img src={villa} alt='house'/>
      </div>
    </div>
  )
}

export default Home
