import React, { useEffect, useState, useRef } from 'react';
import '../../assets/styles/pages/brandingpage.scss';
import '../../assets/styles/pages/commonpages.scss';
import { mascotImage } from '../../assets';
import { brandingTags } from '../../utils/constants';

export default function BrandingPage() {
  const mascotImageRef = useRef(null);
  const brandingPageRef = useRef(null);
  useEffect(() => {
    console.log('in UseEffect');
    window.addEventListener('scroll', scrollHandler);
    return () => {
      console.log('in UseEffect CleanUp');
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const [inView, setInView] = useState(false);
  const isInView = () => {
    // console.log(brandingPageRef.current)
    if (brandingPageRef.current) {
      const rect = brandingPageRef.current.getBoundingClientRect();
      console.log('Top ->', rect.top, 'Bottom ->', rect.bottom)
      return rect.top < window.innerHeight && rect.bottom >= 0;
    }
    return false;
  };
  const scrollHandler = () => {
    console.log(isInView())
    if (isInView()) {
      mascotImageRef.current.style.cssText = `
      transform: translateX(-${window.pageYOffset / 5}px);
      `;
      // console.log('mascotImage is in view', window.pageYOffset / 2);
      return;
    }
  };

  return (
    <div className="pages branding-page-container">
      <div>
        <div className="pages-main" ref={brandingPageRef}>
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
            <img src={mascotImage} alt="sit-relax" ref={mascotImageRef} />
          </div>
        </div>

        <div className="pages-tags-container branding-tags-container">
          <ul>
            {brandingTags.map(tag => (
              <li key={tag}>
                <p className="branding-tags">{tag}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
