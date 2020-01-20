import React from 'react';
import '../../assets/styles/pages/brandingpage.scss';
import '../../assets/styles/pages/commonpages.scss';
import { mascotImage } from '../../assets';
import { brandingTags } from '../../utils/constants';

export default function BrandingPage() {
  return (
    <div className="pages branding-page-container">
      <div>
        <div className="pages-main">
          <div className="page-title-container pages-content">
            <h2 className="branding-h2">Branding</h2>
            <div className="pages-p-container">
              <p className="branding-p">
                We take care of the creation, construction and development of the brand, we know that each one is different, so it is
                important to know that essence that makes them different from the others. Finding the DNA of your brand is our purpose.
              </p>
            </div>

            <button className="see-more-button branding-btn">see more</button>
          </div>
          <div className="pages-image-container pages-content">
            <img src={mascotImage} alt="sit-relax" />
          </div>
        </div>

        <div className="pages-tags-container branding-tags-container">
          <ul>
            {brandingTags.map(tag => (
              <li>
                <p className="branding-tags">{tag}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
