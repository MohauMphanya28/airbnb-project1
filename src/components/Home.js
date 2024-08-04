import React from "react";
import "./Home.css";
import Header from "./Header";
import Booking from "./Booking";
import home from "../images/home.jpeg";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Booking />
      <div className="card">
        <img src={home} alt="house" className="home" />
        <div className="main-card-text">
          Not sure where to go? Perfect!
          <button className="btn">I'm flexible!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
