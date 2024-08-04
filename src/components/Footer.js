import React from "react";
import "./Footer.css";
import { Language, AttachMoney, FacebookRounded, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <p>Support</p>
          <ul>
            <li>Help Center</li>
            <li>Safety information</li>
            <li>Cancellation options</li>
            <li>Our COVID-19 Response</li>
            <li>Supporting people with disabilities</li>
            <li>Report a neighborhood concern</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>Community</p>
          <ul>
            <li>Airbnb.org: disaster relief housing</li>
            <li>Support: Afghan refugees</li>
            <li>Celebrating diversity & belonging</li>
            <li>Combating discrimination</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>Hosting</p>
          <ul>
            <li>Try hosting</li>
            <li>AirCover: protection for hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our commuity forum</li>
            <li>How to host responsibly</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>About</p>
          <ul>
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Learn from our founders</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Airbnb Luxe</li>
          </ul>
        </div>
      </div>
      <div className="kicker">
        <div className="kicker-left">
          <p>2022 Airbnb, Inc.</p>
          <p>• Privacy</p>
          <p>• Terms</p>
          <p>• Sitemap</p>
        </div>
        <div className="kicker-right">
            <div className="lang-and-curr">
            <Language style={{color: "#777e89", marginRight: "10px"}} />
            <p>English (US)</p>
            <AttachMoney style={{color: "#777e89", marginRight: "10px"}} />
            <p>USD</p>
            </div>
            <div>
            <FacebookRounded style={{color: "#777e89", marginRight: "20px"}} />
            <Twitter style={{color: "#777e89", marginRight: "20px"}} />
            <Instagram style={{color: "#777e89"}} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
