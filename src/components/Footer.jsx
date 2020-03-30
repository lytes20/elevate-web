import React from 'react';
import '../assets/styles/footer.scss';
import FooterMediaLinks from './FooterMediaLinks';
import ContactInfo from './ContactInfo';

export default function Footer() {
  // function createData() {}
  // const addressDetails = [createData('Acacia Mall fourth floor'), createData('0752229343'), createData('gideonbamuleseyo@gmail.com')];
  const footerLinks = ['Home', 'Branding', 'Digital', 'BTL'];
  return (
    <footer>
      <div className="logo">
        <h1>Elevate Ug</h1>
      </div>

      <ul>
        {footerLinks.map(footerLink => (
          <li key={footerLink}>{footerLink}</li>
        ))}
      </ul>
      <div className="footer-contact-info">
        <ContactInfo />
      </div>
      <div className="footer-media-links">
        <FooterMediaLinks />
      </div>
      <div className="footer-tag-line">
        <p>Our work is done to provide the best service</p>
      </div>
      <div className="rights-container">Elevate Ug - All rights reserved</div>
    </footer>
  );
}
