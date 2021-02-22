class Api {

  addReview(review) {
    localStorage.setItem(`avto-moto`, review);
  }

  getReviews() {
    localStorage.getItem(`avto-moto`);
  }
}

export default Api;
