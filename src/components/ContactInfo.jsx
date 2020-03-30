import React from 'react';
import '../assets/styles/contactinfo.scss';
import { pinIcon, phoneIcon, emailIcon } from '../assets';

export default function ContactInfo() {
  function createData(details, icon) {
    return { details, icon };
  }
  const contactInfoDetails = [
    createData('4th floor Block C, Lugogo House, Plot 42 lugogo Bypass, Kampala Uganda', pinIcon),
    createData('(+256) 786 691 088', phoneIcon),
    createData('info@elevateug.com', emailIcon)
  ];
  return (
    <ul className="">
      {contactInfoDetails.map((contactInfo, index) => (
        <li key={index}>
          <div className="contact-info-container">
            <div className="icon">
              <img src={contactInfo.icon} alt="icon"/>
            </div>
            <p>{contactInfo.details}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
