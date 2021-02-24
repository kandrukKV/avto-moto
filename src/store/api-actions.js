import {setReviews, addReview} from "./action";

export const initApp = () => (dispatch, _getState, api) => {
  api.initLocalStorage();
  dispatch(setReviews(api.getReviews()));
};

export const addNewReview = (review) => (dispatch, _getState, api) => {
  dispatch(addReview(api.addReview(review)));
  dispatch(setReviews(api.getReviews()));
};
