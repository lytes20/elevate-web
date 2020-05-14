import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import '../../assets/styles/pages/uiux.scss';
import '../../assets/styles/pages/commonpages.scss';
import { UIUXHeading, UIUXImage } from '../../assets';

export default function BrandingPage() {
  const mascotImageRef = useRef(null);
  const brandingPageRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });
  // const [inView, setInView] = useState(false);
  const isInView = () => {
    if (brandingPageRef.current) {
      const rect = brandingPageRef.current.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    }
    return false;
  };
  const scrollHandler = () => {
    // if (isInView()) {
    //   mascotImageRef.current.style.cssText = `
    //   transform: translateX(-${window.pageYOffset / 5}px);
    //   `;
    //   return;
    // }
  };

  return (
    <div className="UIUX-container">
      <div className="UIUX-content">
        <div className="UIUX-wording-container">
          <div>
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
        <div className="UIUX-image-container">
          <img src={UIUXImage} alt="ui-ux" ref={mascotImageRef} />
        </div>
      </div>
    </div>
  );
}
