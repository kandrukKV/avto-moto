import React from "react";
import PropTypes from "prop-types";
import "./auto-features.scss";

const AutoFeatures = ({features}) => {
  return (
    <ul className="auto-features">
      {
        features.map((feature) => {
          return (
            <li key={feature.name} className="auto-features__item">
              <span>{feature.name}</span>
              <span>{feature.value}</span>
            </li>
          );
        })
      }
    </ul>
  );
};

AutoFeatures.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
};

export default AutoFeatures;
