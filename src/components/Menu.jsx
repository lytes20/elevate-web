import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/menu.scss';
import { closeMenuModel } from '../actions/appActions';

function Menu(props) { 
  const { openMenu, closeMenuModel } = props;
  const styleclass = openMenu ? 'menu-container' : 'menu-container-none';
  return (
    <div className={styleclass}>
      <button onClick={() => closeMenuModel()}>Close</button>
      <div className="menu-list-container">
        <ul>
          <li><a href="https://www.google.com/">Home</a></li>
          <li><a href="https://www.google.com/">Branding</a></li>
          <li><a href="https://www.google.com/">Digital</a></li>
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
    closeMenuModel: () => dispatch(closeMenuModel())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
