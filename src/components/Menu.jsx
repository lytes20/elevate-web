import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/menu.scss';
import { toggleMenu } from '../actions/appActions';
import { navigationLinks } from '../utils/constants';

function Menu(props) {
  const { openMenu, toggleMenu } = props;
  const styleclass = openMenu ? 'menu-container' : 'menu-container-none';
  return (
    <div className={styleclass}>
      <div className="menu-list-container">
        <ul>
          {navigationLinks.map(navLink => (
            <li key={navLink.name}>
              <Link to={navLink.path} onClick={() => toggleMenu(false)}>
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    openMenu: state.appReducer.openMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: value => dispatch(toggleMenu(value))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
