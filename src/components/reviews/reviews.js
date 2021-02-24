import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getDiffDate} from "../../utils";

import RatingView from "../rating-view/rating-view";
import Modal from "../modal/modal";

import "./reviews.scss";
import ReviewForm from "../rewiew-form/review-form";

const Reviews = ({reviews}) => {

  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <div className="reviews">
      <ul className="reviews__list">
        {
          reviews.length > 0 ?
            reviews.map((review) => {
              return (
                <li key={`rev-${review.id}`} className="reviews__item">
                  <h2 className="reviews__author">{review.userName}</h2>

                  <div className="reviews__desc-wrap reviews__desc-wrap--plus">
                    <p className="reviews__desc-name">Достоинства</p>
                    <p className="reviews__desc">{review.worth}</p>
                  </div>

                  <div className="reviews__desc-wrap reviews__desc-wrap--minus">
                    <p className="reviews__desc-name">Недостатки</p>
                    <p className="reviews__desc">{review.limitations}</p>
                  </div>

                  <div className="reviews__comment">
                    <p className="reviews__desc-name">Комментарий</p>
                    <p className="reviews__desc">{review.comment}</p>
                  </div>

                  <RatingView rating={review.rating}/>

                  <div className="reviews__bottom">
                    <span className="reviews__datetime">{`${getDiffDate(review.dateTime)} назад`}</span>
                    <button className="reviews__answer">Ответить</button>
                  </div>
                </li>
              );
            })
            : (<h2>Пока нет отзывов</h2>)
        }
      </ul>
      <button className="reviews__send" onClick={() => setModalIsActive(true)}>Оставить отзыв</button>
      {
        modalIsActive &&
        <Modal setIsOpen={setModalIsActive}>
          <ReviewForm
            closeForm={() => setModalIsActive(false)}
          />
        </Modal>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews
});

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    worth: PropTypes.string.isRequired,
    limitations: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired
  }))
};

export default connect(mapStateToProps)(Reviews);
