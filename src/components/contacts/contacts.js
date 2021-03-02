import React from "react";
import PropTypes from "prop-types";
import "./contacts.scss";

import map from "../../img/map.jpg";
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
          <p className="contacts__value"><a className="contacts__email" href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
        </li>
      </ul>
      <div className="contacts__wrap">
        <img className="contacts__map" src={map} width="431" height="271" alt="Карта"/>
        <img className="contacts__icon" src={locIcon} width="32" height="40" alt="Карта"/>
        <div className="contacts__ya-map">
          <iframe src={`https://yandex.ru/map-widget/v1/?um=constructor%3Acbc85790938ea2b700853bed3c98dcc2d59065e031f475a5807dff922d489985&amp;source=constructor`} width="431" height="271" frameBorder="0"/>
        </div>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.shape({
    address: PropTypes.string.isRequired,
    workTime: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default Contacts;
