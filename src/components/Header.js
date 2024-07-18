import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pSmwcGEaPCjbUGcuTDnXaQHaEK%26pid%3DApi&sp=1721241622T2e6e5ef53b95695fdc8c48a3dcd1d8a328d5b2f3af4a22f6ba5f727c0dec689f"
          alt="logo"
        />
      </div>
      <div className="booking">
        <div>Anywhere</div>
        <div>Any week</div>
        <div>Add guests</div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
