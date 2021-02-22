import "./modal.scss";
import close from "../../img/close.svg";

const Modal = ({isOpen, setIsOpen, children}) => {
  return (
    <div className={isOpen ? 'modal modal--active' : 'modal'} onClick={() => setIsOpen(false)}>
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        {children}
        <img
          onClick={() => setIsOpen(false)}
          className="modal__close"
          src={close}
          alt="close button"
          width="15"
          height="15"/>
      </div>
    </div>
  )
}

export default Modal;
