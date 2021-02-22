import React from "react";
import "./logo.scss";
import logo from "../../img/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__img">
        <img src={logo} width="55" height="55" alt="Logo"/>
      </div>
      <div className="logo__text">
        <p className="logo__name">AVTO</p>
        <p className="logo__subname">MOTO</p>
      </div>
    </div>
  );
};

export default Logo;
