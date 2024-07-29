import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import logo from "../images/white-logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <div className="header-center">
        <p>Places to stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>
      <div className="header-left">
        <div className="host">
          <p>Become a Host</p>
          <LanguageIcon style={{ margin: '0px 20px',}} />
        </div>
        <div className="profile">
          <MenuIcon style={{ fontSize: 30, padding: '0px 5px', backgroundColor: "white", color: "black" }}/>
          <Link to="/login" style={{backgroundColor: "white"}}>
          <AccountCircleIcon style={{ color: "grey", fontSize: 30, padding: '0px 5px', backgroundColor: "white", border: "none"}} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
