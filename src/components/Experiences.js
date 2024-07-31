import React from "react";
import "./Experiences.css";
import trip from "../images/tripExperiences.jpg";
import home from "../images/homeExperiences.png";

const Experiences = () => {
  return (
    <div className="experiences">
      <h1>Discover Airbnb Experiences</h1>
      <div className="container">
        <div className="column left-col">
          <img src={trip} alt="canyon" className="tripExp" />
          <div className="text">
            <p>
              Things to do <br /> on your trip
            </p>
            <button>Experiences</button>
          </div>
        </div>
        <div className="column right-col">
          <img src={home} alt="home" className="homeExp" />
          <div className="text">
            <p>
              Things to do <br /> from home
            </p>
            <button> Online Experiences</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
