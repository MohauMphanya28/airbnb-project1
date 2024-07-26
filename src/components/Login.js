import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <header>
        <img
          src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.z50aVmBTJ1t23cRk9twkyAHaDU%26pid%3DApi&sp=1721314168Teea2c973330cf49de189820d703282b1994a5eb36608263150a76ac8f7166570"
          alt="logo"
          className="logo"
        />
      </header>
        <div className="login-container">
          <div className="login-title">
            <p>Login</p>
          </div>
          <form>
            <h5>Username</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="password" /> 
          </form>
          <h5>Forgot Password?</h5>

          <div className="loginButton-container">
            <button type="submit" className="login-button">
              <strong>Login</strong>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Login;
