import React from "react";
import PropTypes from "prop-types";
import "./rating-view.scss";

import {RATING_STARS, GOOD_RATING} from "../../const";

const RatingView = ({rating}) => {
  return (
    <div className="rating">
      <div className="rating__starts">
        {
          RATING_STARS.map((star, idx) =>
            <span key={idx} className={`rating__star${idx < rating ? ` rating__star--active` : ``}`}>{star}</span>
          )
        }
      </div>
      <span className="rating__result">{rating >= GOOD_RATING ? `Советует` : `Не советует`}</span>
    </div>
  );
};

RatingView.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingView;
