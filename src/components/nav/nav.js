import React from "react";
import PropTypes from "prop-types";
import "./nav.scss";

const Nav = ({navList}) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navList.map((item) => <li key={`nav-${item.id}`} className="nav__item">{item.name}</li>)}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Nav;
