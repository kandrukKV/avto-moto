import React, {PureComponent} from "react";
import RatingForm from "../rating-form/rating-form";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classNames from "classnames";
import {
  changeReviewUserName,
  changeReviewWorth,
  changeReviewLimitation,
  changeReviewComment,
  changeReviewRating,
  clearReviewForm
} from "../../store/action";

import {addNewReview} from "../../store/api-actions";

import "./review-form.scss";

class ReviewForm extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isUserNameError: false,
      isCommentError: false
    };
    this.sendReviewHandler = this.sendReviewHandler.bind(this);
  }

  sendReviewHandler(evt) {
    evt.preventDefault();

    if (!this.props.userName) {
      this.setState({isUserNameError: true});
    } else {
      this.setState({isUserNameError: false});
    }

    if (!this.props.comment) {
      this.setState({isCommentError: true});
    } else {
      this.setState({isCommentError: false});
    }

    if (this.props.userName && this.props.comment) {
      this.props.addNewReview({
        userName: this.props.userName,
        worth: this.props.worth,
        limitations: this.props.limitations,
        rating: this.props.rating,
        comment: this.props.comment,
      });
      this.props.clearForm();
      this.props.closeForm();
    }
  }

  render() {
    const {
      userName, changeUserName,
      worth, changeWorth,
      limitations, changeLimitation,
      comment, changeComment,
      rating, changeRating
    } = this.props;

    const {
      isUserNameError,
      isCommentError
    } = this.state;

    const userNameInputClass = classNames(
        `review-form__field`,
        `review-form__field__required`,
        {'review-form__field__required--error': isUserNameError});

    const CommentInputClass = classNames(
        `review-form__field`,
        `review-form__field__required`,
        {'review-form__field__required--error': isCommentError});

    return (
      <form className="review-form">
        <div className="review-form__title">Оставьте отзыв</div>
        <div className="review-form__wrap">
          <div className="review-form__collum">
            <div className={userNameInputClass}>
              <label className="visually-hidden" htmlFor="userName">Имя</label>
              <input
                className="review-form__input"
                id="userName"
                type="text"
                autoFocus={true}
                placeholder="Имя"
                required
                value={userName}
                onChange={(evt) => changeUserName(evt.target.value)}
              />
            </div>

            <div className="review-form__field">
              <label className="visually-hidden" htmlFor="worth">Достоинства</label>
              <input
                className="review-form__input"
                id="worth"
                type="text"
                placeholder="Достоинства"
                value={worth}
                onChange={(evt) => changeWorth(evt.target.value)}
              />
            </div>

            <div className="review-form__field">
              <label className="visually-hidden" htmlFor="limitations">Недостатки</label>
              <input
                className="review-form__input"
                id="limitations"
                type="text"
                placeholder="Недостатки"
                value={limitations}
                onChange={(evt) => changeLimitation(evt.target.value)}
              />
            </div>

          </div>
          <div className="review-form__collum">

            <div className="review-form__rating">
              <p className="review-form__label">Оцените товар:</p>
              <RatingForm rating={rating} onChangeRating={changeRating}/>
            </div>

            <div className={CommentInputClass}>
              <label className="visually-hidden" htmlFor="comments">Комментарий</label>
              <textarea
                className="review-form__comments"
                id="comments"
                placeholder="Комментарий"
                value={comment}
                onChange={(evt) => changeComment(evt.target.value)}
              />
            </div>

          </div>
        </div>
        <div className="review-form__bottom">
          <button
            className="review-form__btn"
            type="submit"
            onClick={(evt) => this.sendReviewHandler(evt)}
          >оставить отзыв</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: state.newReview.userName,
  worth: state.newReview.worth,
  limitations: state.newReview.limitations,
  rating: state.newReview.rating,
  comment: state.newReview.comment,
  dateTime: state.newReview.datetime
});

const mapDispatchToProps = (dispatch) => ({
  changeUserName(userName) {
    dispatch(changeReviewUserName(userName));
  },
  changeWorth(worth) {
    dispatch(changeReviewWorth(worth));
  },
  changeLimitation(limitation) {
    dispatch(changeReviewLimitation(limitation));
  },
  changeComment(comment) {
    dispatch(changeReviewComment(comment));
  },
  changeRating(rating) {
    dispatch(changeReviewRating(rating));
  },
  clearForm() {
    dispatch(clearReviewForm());
  },
  addNewReview(review) {
    dispatch(addNewReview(review));
  }
});

ReviewForm.propTypes = {
  userName: PropTypes.string.isRequired,
  worth: PropTypes.string.isRequired,
  limitations: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  changeUserName: PropTypes.func.isRequired,
  changeWorth: PropTypes.func.isRequired,
  changeLimitation: PropTypes.func.isRequired,
  changeRating: PropTypes.func.isRequired,
  changeComment: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  addNewReview: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
