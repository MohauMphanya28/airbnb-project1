import React from "react";
import "./Destinations.css";

const Destinations = () => {
  return (
    <div className="destinations">
      <h1>Inspiration for future getaways</h1>
      <ul>
        <li>Destinations for arts & culture</li>
        <li>Destinations for outdoor adventure</li>
        <li>Mountain cabins</li>
        <li>Beach destinations</li>
        <li>Popular destinations</li>
        <li>Unique stays</li>
      </ul>

      <div className="row">
        <div className="locations">
          <p className="city">Phoenix</p>
          <p className="country">Arizona</p>
        </div>
        <div className="locations">
          <p className="city">Hot Springs</p>
          <p className="country">Arkansas</p>
        </div>
        <div className="locations">
          <p className="city">Los Angeles</p>
          <p className="country">California</p>
        </div>
        <div className="locations">
          <p className="city">San Diego</p>
          <p className="country">California</p>
        </div>
      </div>
      <div className="row">
        <div className="locations">
          <p className="city">San Francisco</p>
          <p className="country">California</p>
        </div>
        <div className="locations">
          <p className="city">Barcelona</p>
          <p className="country">Catalonia</p>
        </div>
        <div className="locations">
          <p className="city">Prague</p>
          <p className="country">Czechia</p>
        </div>
        <div className="locations">
          <p className="city">Washigton</p>
          <p className="country">District of Columbia</p>
        </div>
      </div>
      <div className="row">
        <div className="locations">
          <p className="city">Keswick</p>
          <p className="country">England</p>
        </div>
        <div className="locations">
          <p className="city">London</p>
          <p className="country">England</p>
        </div>
        <div className="locations">
          <p className="city">Scarborough</p>
          <p className="country">England</p>
        </div>
        <div className="locations link">
          <p>Show more</p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
