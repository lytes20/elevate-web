import React from 'react';

export default function Footer() {
  function createData() {}
  const addressDetails = [createData('Acacia Mall fourth floor'), createData('0752229343'), createData('gideonbamuleseyo@gmail.com')];
  const footerLinks = ['Home', 'Branding', 'Digital', 'BTL'];
  return (
    <div>
      Elevate Ug
      <ul>
        {footerLinks.map(footerLink => (
          <li>{footerLink}</li>
        ))}
      </ul>
      <div>
        <ul>
          <li>Acacia Mall fourth floor</li>
        </ul>
      </div>
      {/* Social Media Icons Container */}
      <div></div>
      <div>
        <p>Our work is done to provide the best service More than 10 years of experience support our work</p>
      </div>
      <div>Elevate Ug - All rights reserved</div>
    </div>
  );
}
