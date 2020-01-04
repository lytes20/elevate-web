import React from 'react';
import '../assets/styles/header.scss';
import menuButton from '../assets/svgs/menu-button.svg';

class Header extends React.Component {
  toggleMenu = () => {
    console.log('Menu Button was clicked');
  };
  render() {
    return (
      <header className="sticky">
        <div>
          <h1>Elevate</h1>
        </div>

        {/* menu icon */}
        <div>
          <button className="header-menu-button" onClick={this.toggleMenu}>
            <img src={menuButton} alt="menu" />
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
