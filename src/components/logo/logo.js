import React from "react";
import "./logo.scss";
import logo from "../../img/logo.svg";
import auto from "../../img/avto.png";
import moto from "../../img/moto.png";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__img">
        <img src={logo} width="55" height="55" alt="Logo"/>
      </div>
      <div className="logo__text">
        <p className="logo__name"><img src={auto} alt="AVTO" width="55" height="15"/></p>
        <p className="logo__subname"><img src={moto} alt="AVTO" width="47" height="12"/></p>
      </div>
    </div>
  );
};

export default Logo;
