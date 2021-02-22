import "./avto-description.scss";

import fuel from "../../img/fuel.png";
import power from "../../img/power.svg";
import volume from "../../img/volume.svg";
import transmission from "../../img/transmission.svg";

const AvtoDescription = ({ name, params, price }) => {
  const icons = {fuel, power, volume, transmission};
  return (
    <div className="description">
      <h2 className="description__title">{name}</h2>

      <ul className="description__params">
        {
          Object.keys(params).map(paramKey => {
            return (
              <li key={params[paramKey]} className="description__param">
                <div className="description__icon">
                  <img src={icons[paramKey]} width="40" height="40" alt={params[paramKey]}/>
                </div>
                <p className="description__name">{params[paramKey]}</p>
              </li>
            )
          })
        }
      </ul>

      <p className="description__price">{price.current}₽<span>{price.old}₽</span></p>

      <div className="description__btn-wrap">
        <button className="description__btn">оставить заявку</button>
      </div>

      <div className="description__btn-wrap">
        <button className="description__btn description__btn--white">в кредит от 11 000 ₽</button>
      </div>


    </div>
  );
}

export default AvtoDescription;
