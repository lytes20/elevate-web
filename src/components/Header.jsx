import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/header.scss';
import menuButton from '../assets/svgs/menu-button.svg';
import { closeIcon } from '../assets';

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
        <div>
          <h1>Elevate</h1>
        </div>

        {/* menu icon */}
        <div>
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
