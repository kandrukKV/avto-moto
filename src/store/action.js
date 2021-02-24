export const ActionTypes = {
  CHANGE_REVIEW_USERNAME: `CHANGE_REVIEW_USERNAME`,
  CHANGE_REVIEW_WORTH: `CHANGE_REVIEW_WORTH`,
  CHANGE_REVIEW_LIMITATION: `CHANGE_REVIEW_LIMITATION`,
  CHANGE_REVIEW_RATING: `CHANGE_REVIEW_RATING`,
  CHANGE_REVIEW_COMMENT: `CHANGE_REVIEW_COMMENT`,
  SET_REVIEWS: `SET_REVIEWS`,
  ADD_REVIEW: `ADD_REVIEW`,
  CLEAR_REVIEW_FORM: `CLEAR_REVIEW_FORM`
};

export const changeReviewUserName = (userName) => ({
  type: ActionTypes.CHANGE_REVIEW_USERNAME,
  payload: userName
});

export const changeReviewWorth = (worth) => ({
  type: ActionTypes.CHANGE_REVIEW_WORTH,
  payload: worth
});

export const changeReviewLimitation = (limitation) => ({
  type: ActionTypes.CHANGE_REVIEW_LIMITATION,
  payload: limitation
});

export const changeReviewRating = (rating) => ({
  type: ActionTypes.CHANGE_REVIEW_RATING,
  payload: rating
});

export const changeReviewComment = (comment) => ({
  type: ActionTypes.CHANGE_REVIEW_COMMENT,
  payload: comment
});

export const clearReviewForm = () => ({
  type: ActionTypes.CLEAR_REVIEW_FORM
});

export const addReview = (newReview) => ({
  type: ActionTypes.ADD_REVIEW,
  payload: newReview
});

export const setReviews = (reviews) => ({
  type: ActionTypes.SET_REVIEWS,
  payload: reviews
});
