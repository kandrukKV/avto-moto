import React from "react";
import PropTypes from "prop-types";

import "./auto-description.scss";
import fuel from "../../img/fuel.png";
import power from "../../img/power.svg";
import volume from "../../img/volume.svg";
import transmission from "../../img/transmission.svg";

const AutoDescription = ({name, params, price}) => {
  const icons = {fuel, power, volume, transmission};
  return (
    <div className="description">
      <h2 className="description__title">{name}</h2>

      <ul className="description__params">
        {
          Object.keys(params).map((paramKey) => {
            return (
              <li key={params[paramKey]} className="description__param">
                <div className="description__icon">
                  <img src={icons[paramKey]} width="40" height="40" alt={params[paramKey]}/>
                </div>
                <p className="description__name">{params[paramKey]}</p>
              </li>
            );
          })
        }
      </ul>

      <div className="description__price">
        {price.current} ₽
        <div className="description__price--old">{price.old} ₽</div>
      </div>

      <div className="description__btn-wrap">
        <button className="description__btn">оставить заявку</button>
      </div>

      <div className="description__btn-wrap">
        <button className="description__btn description__btn--white">в кредит от 11 000 ₽</button>
      </div>

    </div>
  );
};

AutoDescription.propTypes = {
  name: PropTypes.string.isRequired,
  params: PropTypes.shape({
    fuel: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired
  }),
  price: PropTypes.shape({
    current: PropTypes.string.isRequired,
    old: PropTypes.string.isRequired
  })
};

export default AutoDescription;
