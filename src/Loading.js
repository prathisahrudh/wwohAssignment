import React from "react";
import logo from "./images/logo.svg";

// CSS 
import './Loading.css'
const Loading = () => {
  return (
    <div className="brandLogoContainer d-flex justify-content-center align-items-center flex-column">
      <img src={logo} alt="Brand Logo"  className='brandLogo'/>
      <p className="logoText">logo</p>
    </div>
  );
};

export default Loading;
