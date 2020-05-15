import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import '../../assets/styles/pages/uiux.scss';
import '../../assets/styles/pages/commonpages.scss';
import { UIUXHeading, UIUXImage } from '../../assets';

export default function BrandingPage() {
  const uiUxImageContainer = useRef(null);
  const specialCase = useRef(null);

  useEffect(() => {
    console.log(uiUxImageContainer.current.left);
    specialCase.current.style.cssText = `
      width: ${uiUxImageContainer.current.clientWidth}px;
      `;
    return () => {
      specialCase.current.style.cssText = `
      width: ${uiUxImageContainer.current.clientWidth}px;
      `;
    };
  });

  return (
    <div className="UIUX-container">
      <div className="UIUX-content">
        <div className="UIUX-wording-container">
          <div className="UIUX-wording-contents left-contents">
            <div className="UIUX-heading-image-container">
              <img src={UIUXHeading} alt="Creative Digital content" />
            </div>
            <div className="UIUX-desc-container">
              <p className="UIUX-desc">
                We take care of the creation, construction and development of the brand, we know that each one is different, so it is
                important to know that essence that makes them different from the others. Finding the DNA of your brand is our purpose.
              </p>
            </div>
            <Link className="see-more-button UIUX-see-more-btn" to="/ui-ux">
              Learn more
            </Link>
          </div>
        </div>
        <div className="UIUX-image-container" ref={uiUxImageContainer}>
          <div className="special-case" ref={specialCase}>
            <img src={UIUXImage} alt="ui-ux" />
          </div>
        </div>
      </div>
    </div>
  );
}
