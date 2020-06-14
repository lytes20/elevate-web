import React, { useState } from 'react';

import Footer from './Footer';
import ContactUs from './ContactUs';

import '../assets/styles/bottompage.scss';

export default function BottomPage() {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <React.Fragment>
      <ContactUs open={openModal} handleCloseModal={handleCloseModal}/>
      <div className="bottom-page-container">
        <div className="upper-bottom-page">
          <div className="upper-bottom-page-content">
            <p>READY TO WORK WITH US?</p>
            <p>US At Elevate we anticipate future trends to determine which ones will make your brand take off.</p>
            <div className="buttons">
              <button onClick={() => setOpenModal(true)}>Contact us</button>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-content">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
