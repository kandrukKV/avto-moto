import React from "react";
import RatingForm from "../rating-form/rating-form";
import "./review-form.scss";

const ReviewForm = () => {

  return (
    <form className="review-form">
      <div className="review-form__title">Оставьте отзыв</div>
      <div className="review-form__wrap">
        <div className="review-form__collum">
          <div className="review-form__field review-form__field__required review-form__field__required--error">
            <label className="visually-hidden" htmlFor="userName">Имя</label>
            <input
              className="review-form__input"
              id="userName"
              type="text"
              placeholder="Имя"
              required
            />
          </div>

          <div className="review-form__field">
            <label className="visually-hidden" htmlFor="worth">Достоинства</label>
            <input
              className="review-form__input"
              id="worth"
              type="text"
              placeholder="Достоинства"
            />
          </div>

          <div className="review-form__field">
            <label className="visually-hidden" htmlFor="limitations">Недостатки</label>
            <input
              className="review-form__input"
              id="limitations"
              type="text"
              placeholder="Недостатки"
            />
          </div>

        </div>
        <div className="review-form__collum">

          <div className="review-form__rating">
            <p className="review-form__label">Оцените товар:</p>
            <RatingForm/>
          </div>

          <div className="review-form__field review-form__field__required">
            <label className="visually-hidden" htmlFor="comments">Комментарий</label>
            <textarea className="review-form__comments" id="comments" placeholder="Комментарий"/>
          </div>

        </div>
      </div>
      <div className="review-form__bottom">
        <button className="review-form__btn" type="submit">оставить отзыв</button>
      </div>
    </form>
  );
};

export default ReviewForm;
