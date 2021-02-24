import React, {Fragment} from "react";
import PropTypes from "prop-types";
import "./rating-form.scss";
import {RATING_STARS} from "../../const";

const RatingForm = ({rating, onChangeRating}) => {
  return (
    <div className="rating-form">
      {
        RATING_STARS.map((starValue) => {
          return (
            <Fragment key={`rating-${starValue}`}>
              <input
                className="rating-form__input visually-hidden"
                name="rating" value={starValue}
                id={`${starValue}-stars`}
                type="radio"
                onChange={(evt) => onChangeRating(evt.target.value)}
                checked={rating === starValue}
              />
              <label
                htmlFor={`${starValue}-stars`}
                className="rating-form__label"
              >
                <svg className="rating-form__star" width="27" height="25" viewBox="0 0 27 25" fill="none">
                  <path d="M13.4311 0L16.4774 9.52282H26.3357L18.3602 15.4082L21.4066 24.9311L13.4311 19.0456L5.45554 24.9311L8.50192 15.4082L0.526406 9.52282H10.3847L13.4311 0Z"/>
                </svg>

              </label>
            </Fragment>
          );
        })
      }
    </div>
  );
};

RatingForm.propTypes = {
  rating: PropTypes.number.isRequired,
  onChangeRating: PropTypes.func.isRequired
};

export default RatingForm;
