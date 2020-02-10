import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/menu.scss';
import { toggleMenu } from '../actions/appActions';

function Menu(props) {
  const { openMenu, toggleMenu } = props;
  const styleclass = openMenu ? 'menu-container' : 'menu-container-none';
  return (
    <div className={styleclass}>
      <div className="menu-list-container">
        <ul>
          <li>
            <Link to="/" onClick={() => toggleMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/branding" onClick={() => toggleMenu(false)}>
              Branding
            </Link>
          </li>
          <li>
            <Link to="/btl" onClick={() => toggleMenu(false)}>
              BTL
            </Link>
          </li>
          <li>
            <Link to="/digital" onClick={() => toggleMenu(false)}>
              DIGITAL
            </Link>
          </li>
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
