import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/header.scss';
import menuButton from '../assets/svgs/menu-button.svg';
import { openMenuModel } from '../actions/appActions';

class Header extends React.Component {
  toggleMenu = () => {
    console.log('Menu Button was clicked');
  };
  render() {
    const { isScrolling, openMenuModel } = this.props;
    const headerClass = isScrolling ? 'header-dark-background' : '';
    return (
      <header className={`${headerClass} sticky`}>
        <div>
          <h1>Elevate</h1>
        </div>

        {/* menu icon */}
        <div>
          <button className="header-menu-button" onClick={() => openMenuModel()}>
            <img src={menuButton} alt="menu" />
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isScrolling: state.appReducer.isScrolling
});
const mapDispatchToProps = dispatch => {
  return {
    openMenuModel: () => dispatch(openMenuModel())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
