import {LOCAL_STORAGE_KEY} from "../const";
import {REVIEWS} from "../moks/moks";

class Api {

  addReview(review) {
    const reviews = this.getReviews();
    review.id = Math.random().toString(36).substr(2, 9);
    review.dateTime = new Date().toISOString();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...reviews, review]));
  }

  getReviews() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  }

  initLocalStorage() {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(REVIEWS));
    }
  }
}

export default Api;
