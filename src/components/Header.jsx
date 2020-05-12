import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/header.scss';
import { elevateLogo } from '../assets';

import Menu from './Menu';

import { openMenuModel, toggleMenu } from '../actions/appActions';

const Header = props => {
  const { isScrolling, openMenu, toggleMenu } = props;
  const handleToggleMenu = () => {
    toggleMenu(!openMenu);
  };

  const headerClass = isScrolling ? 'header-dark-background' : '';
  return (
    <div>
      <header className={`${headerClass} sticky`}>
        <div className="Header-logo-container">
          <img src={elevateLogo} />
        </div>

        {/* menu icon */}
        <div className="Header-menu-button-container">
          <div className="icon-bars" onClick={() => handleToggleMenu()}>
            <span className={`icon-bar ${openMenu ? "icon-bar-top-toggle" : "icon-bar-top "}`}></span>
            <span className={`icon-bar ${openMenu ? "icon-bar-middle-toggle" : "icon-bar-middle"}`}></span>
            <span className={`icon-bar ${openMenu ? "icon-bar-bottom-toggle" : "icon-bar-bottom"}`}></span>
          </div>
        </div>
      </header>
      <Menu />
    </div>
  );
};

const mapStateToProps = state => ({
  isScrolling: state.appReducer.isScrolling,
  openMenu: state.appReducer.openMenu
});
const mapDispatchToProps = dispatch => {
  return {
    openMenuModel: () => dispatch(openMenuModel()),
    toggleMenu: value => dispatch(toggleMenu(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
