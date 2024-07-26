import React from "react";
import "./Booking.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMore';
import { Button } from "@mui/material";

const Booking = () => {
  
  return (
    <div className="booking">
      <form>
        <div className="hotel-input optn">
          <div>
          <label>Hotel</label>
          <input type="text" placeholder="Select Hotel" />
          </div>
          <div>
          <ExpandMoreRoundedIcon style={{color: "#4971ff", borderRadius: "5px", marginRight: "40px", backgroundColor: "#f7f7f7", width:40, height: 40}} />
          </div>
        </div>       
        <div className="optn">
          <label>Check in</label>
          <input type="text" placeholder="Add date" />
        </div>
        <div className="optn">
          <label>Check out</label>
          <input type="text" placeholder="Add date" />
        </div>
        <div className="optn guest">
          <label>Guests</label>
          <input type="text" placeholder="Add guests" />
        </div>
        <SearchIcon style={{ fontSize: "30px", borderRadius: "50%", backgroundColor: "rgb(255, 56, 93)", color: "white", padding: "5px", margin: 0}} />
      </form>
    </div>
  );
};

export default Booking;

// width: 40, height: 40,