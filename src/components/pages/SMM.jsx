import React from 'react';

import { Link } from 'react-router-dom';

import '../../assets/styles/pages/commonpages.scss';
import '../../assets/styles/pages/digitalpage.scss';
import { socialMediaImage } from '../../assets';

export default function DigitalPage() {
  return (
    <div className="UIUX-container SMM">
      <div className="UIUX-content">
        <div className="UIUX-wording-container">
          <div>
            <h2 className="SMM-h2">
              <span className="social-media">Social Media</span> Management
            </h2>
            <div className="UIUX-desc-container">
              <p className="UIUX-desc">
                We take care of the creation, construction and development of the brand, we know that each one is different, so it is
                important to know that essence that makes them different from the others. Finding the DNA of your brand is our purpose.
              </p>
            </div>
            <Link className="see-more-button SMM-see-more-btn" to="/social-medial-management">
              Learn more
            </Link>
          </div>
        </div>
        <div className="UIUX-image-container">
          <img src={socialMediaImage} alt="ui-ux" />
        </div>
      </div>
    </div>
  );
}
