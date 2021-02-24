import {ActionTypes} from "./action";
import {extend} from "../utils";

const initialState = {
  reviews: [],
  newReview: {
    userName: ``,
    worth: ``,
    limitations: ``,
    rating: 0,
    comment: ``,
    datetime: `1 минуту назад`
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_REVIEW_USERNAME:
      return extend(state, {
        newReview: extend(state.newReview, {
          userName: action.payload
        })
      });
    case ActionTypes.CHANGE_REVIEW_WORTH:
      return extend(state, {
        newReview: extend(state.newReview, {
          worth: action.payload
        })
      });
    case ActionTypes.CHANGE_REVIEW_LIMITATION:
      return extend(state, {
        newReview: extend(state.newReview, {
          limitations: action.payload
        })
      });
    case ActionTypes.CHANGE_REVIEW_RATING:
      return extend(state, {
        newReview: extend(state.newReview, {
          rating: parseInt(action.payload, 10)
        })
      });
    case ActionTypes.CHANGE_REVIEW_COMMENT:
      return extend(state, {
        newReview: extend(state.newReview, {
          comment: action.payload
        })
      });
    case ActionTypes.CLEAR_REVIEW_FORM:
      return extend(state, {
        newReview: {
          userName: ``,
          worth: ``,
          limitations: ``,
          rating: 0,
          comment: ``,
          datetime: ``
        }
      });
    case ActionTypes.ADD_REVIEW:
      return extend(state, {
        reviews: [...state.reviews, action.payload]
      });
    case ActionTypes.SET_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });
    default:
      return state;
  }
};
