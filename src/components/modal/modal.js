import React, {useEffect} from "react";
import PropTypes from "prop-types";
import "./modal.scss";

import {ESC_KEY} from "../../const";

const Modal = ({setIsOpen, children}) => {

  const escKeydownListener = (evt) => {
    if (evt.key === ESC_KEY) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, escKeydownListener);
    document.body.style.overflow = `hidden`;
    return () => {
      document.removeEventListener(`keydown`, escKeydownListener);
      document.body.style.overflow = `unset`;
    };
  }, []);

  return (
    <div className={`modal modal--active`} onClick={() => setIsOpen(false)}>
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        {children}
        <button
          className="modal__btn"
          onClick={() => setIsOpen(false)}>
          <svg
            className="modal__btn-inner"
            width="15" height="16" viewBox="0 0 15 16" fill="none">
            <path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
