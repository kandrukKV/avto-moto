import React from "react";
import PropTypes from "prop-types";
import "./avto-features.scss";

const AvtoFeatures = ({features}) => {
  return (
    <ul className="avto-features">
      {
        features.map((feature) => {
          return (
            <li key={feature.name} className="avto-features__item">
              <span>{feature.name}</span>
              <span>{feature.value}</span>
            </li>
          );
        })
      }
    </ul>
  );
};

AvtoFeatures.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
};

export default AvtoFeatures;
