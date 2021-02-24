import React from "react";
import PropTypes from "prop-types";

import Logo from "../logo/logo";
import Nav from "../nav/nav";

import './header.scss';

const Header = ({navList}) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo/>
        <Nav navList={navList}/>
      </div>
    </header>
  );
};

Header.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Header;
