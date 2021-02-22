import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

import "./tab-bar.scss";
import TabBarNav from "../tab-bar-nav/tab-bar-nav";

class TabBar extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  constructor() {
    super();
    this.state = {activeTab: null};
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  componentDidMount() {
    const {children = []} = this.props;

    const activeTab = this.getChildrenLabels(children)[0];

    this.setActiveTab(activeTab);
  }

  getChildrenLabels = (children) => children.map(({props}) => props.label)

  setActiveTab(activeTab) {
    const {activeTab: currentTab} = this.state;

    if (currentTab !== activeTab) {
      this.setState({
        activeTab,
      });
    }
  }

  renderTabs() {
    const {children = []} = this.props;
    const {activeTab} = this.state;

    return this.getChildrenLabels(children).map((navLabel) => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        className={classNames({'tab-bar-nav--active': activeTab === navLabel})}
        onChangeActiveTab={this.setActiveTab}
      />
    ));
  }


  render() {
    const {activeTab} = this.state;
    const {
      children, ...attrs
    } = this.props;

    const classes = classNames(`tab-bar`);

    return (
      <div className={classes} {...attrs}>
        <div className="tab-bar__nav">
          {this.renderTabs()}
        </div>
        <div className="tab-bar__container">
          {
            React.Children.map(children, (child) => React.cloneElement(child, {activeTab}))
          }
        </div>
      </div>
    );
  }
}

TabBar.propTypes = {
  children: PropTypes.node,
};

export default TabBar;
