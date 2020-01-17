import React from 'react';
import '../assets/styles/contactinfo.scss';
import { pinIcon, phoneIcon, emailIcon } from '../assets';

export default function ContactInfo() {
  function createData(details, icon) {
    return { details, icon };
  }
  const contactInfoDetails = [
    createData('Acacia Mall fourth floor', pinIcon),
    createData('(+256) 752 229 343', phoneIcon),
    createData('gideonbamuleseyo@gmil.com', emailIcon)
  ];
  return (
    <ul className="">
      {contactInfoDetails.map((contactInfo, index) => (
        <li key={index}>
          <div className="contact-info-container">
            <div className="icon">
              <img src={contactInfo.icon} />
            </div>
            <p>{contactInfo.details}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
