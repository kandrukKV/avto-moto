import React, { Component } from 'react';
import classNames from 'classnames';

import "./tab-bar.scss";
import TabBarNav from "../tab-bar-nav/tab-bar-nav";

class TabBar extends Component {

  state = {
    activeTab: null,
  }

  componentDidMount() {
    const { children = [] } = this.props;

    const activeTab = this.getChildrenLabels(children)[0];

    this.setActiveTab(activeTab);
  }

  getChildrenLabels = (children) => {
    return children.map(({ props }) => props.label);
  }

  setActiveTab = activeTab => {
    const { activeTab: currentTab } = this.state;

    if (currentTab !== activeTab) {
      this.setState({
        activeTab,
      });
    }
  }

  renderTabs = () => {
    const { children = [] } = this.props;
    const { activeTab } = this.state;

    return this.getChildrenLabels(children).map((navLabel) => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        className={classNames({ 'tab-bar-nav--active': activeTab === navLabel })}
        onChangeActiveTab={this.setActiveTab}
      />
    ));
  }

  render() {
    const { activeTab } = this.state;
    const {
      children, className, ...attrs
    } = this.props;

    const classes = classNames(
      'tab-bar',
      className,
    );

    return (
      <div className={classes} {...attrs}>
        <div className="tab-bar__nav">
          {this.renderTabs()}
        </div>
        <div className="tab-bar__container">
          {
            React.Children.map(children, child => React.cloneElement(child, { activeTab }))
          }
        </div>
      </div>
    );
  }
}

export default TabBar;