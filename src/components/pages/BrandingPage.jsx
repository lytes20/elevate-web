import React from 'react';
import '../../assets/styles/pages/brandingpage.scss';
import { mascotImage } from '../../assets';

export default function BrandingPage() {
  return (
    <div className="branding-page-container">
      <div>
        <div className="branding-page-main">
          <div className="branding-text-container branding-content">
            <h2>Branding</h2>
            <div className="branding-p">
              <p>
                We take care of the creation, construction and development of the brand, we know that each one is different, so it is
                important to know that essence that makes them different from the others. Finding the DNA of your brand is our purpose.
              </p>
            </div>

            <button className="see-more-button">see more</button>
          </div>
          <div className="mascot-image-container branding-content">
            <img src={mascotImage} alt="sit-relax" />
          </div>
        </div>

        <div className="branding-tags-container">
          <ul>
            <li>
              <p className="branding-tags"> Brand management</p>
            </li>
            <li>
              <p className="branding-tags">Strategic design</p>
            </li>
            <li>
              <p className="branding-tags">Packaging</p>
            </li>
            <li>
              <p className="branding-tags">360 campaigns</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
