import PropTypes from "prop-types";

export default {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slides: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })),
    name: PropTypes.string.isRequired,
    params: PropTypes.shape({
      fuel: PropTypes.string.isRequired,
      transmission: PropTypes.string.isRequired,
      power: PropTypes.string.isRequired,
      volume: PropTypes.string.isRequired
    }),
    price: PropTypes.shape({
      current: PropTypes.string.isRequired,
      old: PropTypes.string.isRequired
    }),
    features: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })),
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      worth: PropTypes.string.isRequired,
      limitations: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      dateTime: PropTypes.string.isRequired
    }))
  })
};
