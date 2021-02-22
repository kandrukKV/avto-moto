import classNames from 'classnames';

import './tab-bar-item.scss';

const TabBarItem = ({children, label, activeTab, ...attrs}) => {

  const classes = classNames(
    'tab-bar-item',
    { 'tab-bar-item--active': activeTab === label },
  );

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

export default TabBarItem;