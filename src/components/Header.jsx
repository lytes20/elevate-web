import React, { useEffect } from 'react';

// Third party library imports
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components imports
import Menu from './Menu';

import '../assets/styles/header.scss';
import { elevateLogo } from '../assets';
import { openMenuModel, toggleMenu, handleEndScroll, handleIsScrolling } from '../actions/appActions';

function Header(props) {
  const { isScrolling, openMenu, toggleMenu, handleEndScroll, handleIsScrolling } = props;
  const handleToggleMenu = () => {
    toggleMenu(!openMenu);
  };

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      handleEndScroll();
    } else {
      handleIsScrolling();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = isScrolling ? 'header-dark-background' : '';
  return (
    <div>
      <header className={`${headerClass} sticky`}>
        <div className="Header-logo-container">
          <Link to="/">
            <img src={elevateLogo} />
          </Link>
        </div>

        {/* menu icon */}
        <div className="Header-menu-button-container">
          <div className="icon-bars" onClick={() => handleToggleMenu()}>
            <span className={`icon-bar ${openMenu ? 'icon-bar-top-toggle' : 'icon-bar-top '}`}></span>
            <span className={`icon-bar ${openMenu ? 'icon-bar-middle-toggle' : 'icon-bar-middle'}`}></span>
            <span className={`icon-bar ${openMenu ? 'icon-bar-bottom-toggle' : 'icon-bar-bottom'}`}></span>
          </div>
        </div>
      </header>
      <Menu />
    </div>
  );
}

const mapStateToProps = state => ({
  isScrolling: state.appReducer.isScrolling,
  openMenu: state.appReducer.openMenu
});
const mapDispatchToProps = dispatch => {
  return {
    openMenuModel: () => dispatch(openMenuModel()),
    toggleMenu: value => dispatch(toggleMenu(value)),
    handleEndScroll: () => dispatch(handleEndScroll()),
    handleIsScrolling: () => dispatch(handleIsScrolling())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
