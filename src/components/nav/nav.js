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
  navList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Nav;
