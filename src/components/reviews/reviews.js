import {useState} from "react";

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
                  <span className="reviews__datetime">{review.datetime}</span>
                  <button className="reviews__answer">Ответить</button>
                </div>
              </li>
            )
          })
        }
      </ul>
      <button className="reviews__send" onClick={() => setModalIsActive(true)}>Оставить отзыв</button>
      <Modal isOpen={modalIsActive} setIsOpen={setModalIsActive}>
        <ReviewForm/>
      </Modal>
    </div>
  );
}

export default Reviews;
