import "./contacts.scss";

import map from "../../img/map.jpg"
import locIcon from "../../img/location.svg";

const Contacts = ({contacts}) => {
  return (
    <div className="contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <p className="contacts__name">Адрес</p>
          <p className="contacts__value">{contacts.address}</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__name">Режим работы</p>
          <p className="contacts__value">{contacts.workTime}</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__name">Телефон</p>
          <p className="contacts__value">{contacts.phone}</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__name">Email</p>
          <p className="contacts__value">{contacts.email}</p>
        </li>
      </ul>
      <div className="contacts__wrap">
        <img className="contacts__map" src={map} width="431" height="271" alt="Карта"/>
        <img className="contacts__icon" src={locIcon} width="32" height="40" alt="Карта"/>
      </div>
    </div>
  );
}

export default Contacts;