import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const Button = styled.button`
    background-color: rgb(255, 56, 93);
    border-radius: 50%;
    border: 2px solid rgb(255, 56, 93);
    color: #fff;
    padding: 5px;
    margin-left: 20px;
  `;

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.z50aVmBTJ1t23cRk9twkyAHaDU%26pid%3DApi&sp=1721314168Teea2c973330cf49de189820d703282b1994a5eb36608263150a76ac8f7166570"
          alt="logo"
        />
      </div>
      <div className="header-center">
        <div className="booking-option separator">Anywhere</div>
        <div className="booking-option separator">Any week</div>
        <div className="booking-option">Add guests</div>
        <Button>
          <SearchIcon style={{ fontSize: 35 }}/>
        </Button>
      </div>
      <div className="header-left">
        <div className="profile">
          <MenuIcon style={{ fontSize: 30, padding: '0px 5px' }}/>
          <Link to="/login">
          <AccountCircleIcon style={{ color: "grey", fontSize: 30, padding: '0px 5px' }} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
