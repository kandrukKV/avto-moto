import React, {useEffect} from "react";
import PropTypes from "prop-types";
import "./modal.scss";
import close from "../../img/close.svg";
import {ESC_KEY} from "../../const";

const Modal = ({setIsOpen, children}) => {

  const escKeydownListener = (evt) => {
    if (evt.key === ESC_KEY) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, escKeydownListener);
    return () => {
      document.removeEventListener(`keydown`, escKeydownListener);
    };
  });

  return (
    <div className={`modal modal--active`} onClick={() => setIsOpen(false)}>
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        {children}
        <img
          onClick={() => setIsOpen(false)}
          className="modal__close"
          src={close}
          width="15"
          height="15"
          alt="close button"/>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
