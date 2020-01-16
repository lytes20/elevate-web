import React from 'react';
import '../assets/styles/bottompage.scss';
import Footer from './Footer'

export default function BottomPage() {
  return (
    <div className="bottom-page-container">
      <div className="upper-bottom-page">
        <p>READY TO WORK WITH US</p>
        <p>US At Elevate we anticipate future trends to determine which ones will make your brand take off.</p>
        <div>
          <button>Contact us</button>
          <button>Locate us</button>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
