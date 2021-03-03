import "./slider.scss";
import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Slider = ({slides}) => {

  const [state, setState] = useState({
    currentSlide: 0,
    isDisableArrowLeft: true,
    isDisableArrowRight: false
  });

  const {currentSlide, isDisableArrowLeft, isDisableArrowRight} = state;

  const nextImage = () => {
    const slide = currentSlide + 1;

    if (slide < slides.length) {
      setState({
        currentSlide: slide,
        isDisableArrowLeft: slide === 0,
        isDisableArrowRight: slide === slides.length - 1
      });
    }
  };

  const prevImg = () => {
    const slide = currentSlide - 1;
    if (slide >= 0) {
      setState({
        currentSlide: slide,
        isDisableArrowLeft: slide === 0,
        isDisableArrowRight: slide === slides.length - 1
      });
    }
  };

  const leftArrowClasses = classNames(`slider__arrow`, {'slider__arrow--disable': isDisableArrowLeft});

  const rightArrowClasses = classNames(`slider__arrow`, {'slider__arrow--disable': isDisableArrowRight});

  return (
    <div className="slider">
      <div className="slider__top">
        <img className="slider__top-img slider__top-img--new" src={slides[currentSlide].src} alt={slides[currentSlide].title}/>
      </div>
      <div className="slider__bottom">
        <svg className="slider__btn" width="52" height="52" viewBox="0 0 52 52" onClick={prevImg}>
          <circle cx="26" cy="26" r="25.5" fill="white" stroke="#D7D9DF"/>
          <path className={leftArrowClasses} d="M17.0043 26.1719L22.9184 20.3686M17.0043 26.1719L22.6929 31.9692M17.0043 26.1719L35.9813 26.3513"/>
        </svg>
        <ul className="slider__list">
          {slides.map((slide) => {
            return (
              <li key={`slide-${slide.id}`} className="slider__item">
                <img src={slide.src} width={128} height={80} alt={slide.title}/>
              </li>
            );
          })}
        </ul>
        <svg className="slider__btn" width="52" height="52" viewBox="0 0 52 52" onClick={nextImage}>
          <path d="M0.500408 26C0.500408 40.0834 11.9143 51.5 25.9939 51.5C40.0734 51.5 51.4873 40.0834 51.4873 26C51.4873 11.9166 40.0734 0.5 25.9939 0.5C11.9143 0.5 0.500408 11.9166 0.500408 26Z" fill="white" stroke="#D7D9DF"/>
          <path className={rightArrowClasses} d="M34.9873 26.1719L29.0747 20.3686M34.9873 26.1719L29.3001 31.9692M34.9873 26.1719L16.0151 26.3513"/>
        </svg>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }))
};

export default Slider;
