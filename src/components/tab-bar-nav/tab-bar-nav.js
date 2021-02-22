import React from "react";
import PropTypes from "prop-types";
import "./tab-bar-nav.scss";

import classNames from 'classnames';

const TabBarNav = ({navLabel, className, onChangeActiveTab}) => {
  const classes = classNames(className, `tab-bar-nav`);

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        onChangeActiveTab(navLabel);
      }}>
      {navLabel}
    </button>
  );
};

TabBarNav.propTypes = {
  navLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeActiveTab: PropTypes.func,
};

export default TabBarNav;
