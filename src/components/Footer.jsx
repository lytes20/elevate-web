import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/footer.scss';
import FooterMediaLinks from './FooterMediaLinks';
import ContactInfo from './ContactInfo';
import { navigationLinks } from '../utils/constants';

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
        {navigationLinks.map(navLink => (
          <li key={navLink.name}>
            <Link to={navLink.path}>{navLink.name}</Link>
          </li>
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
