import React from 'react';
import '../assets/styles/home.scss'
import Header from './Header';
import Menu from './Menu'


function Home() {
  return (
    <div className="home-container">
      <Header />
      <Menu />
      <div className="landing-content-container">
        <h1>Branding</h1>
      </div>
    </div>
  );
}

export default Home;
