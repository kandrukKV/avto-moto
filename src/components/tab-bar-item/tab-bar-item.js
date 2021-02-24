import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

import './tab-bar-item.scss';

const TabBarItem = ({children, label, activeTab}) => {

  const classes = classNames(`tab-bar-item`, {'tab-bar-item--active': activeTab === label});

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string,
};

export default TabBarItem;
