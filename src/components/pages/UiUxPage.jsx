import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import '../../assets/styles/pages/brandingpage.scss';
import '../../assets/styles/pages/commonpages.scss';
import { uiUxImage } from '../../assets';
import { brandingTags } from '../../utils/constants';
import { GridContainer, DescContainer } from '../shared';

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
    if (isInView()) {
      mascotImageRef.current.style.cssText = `
      transform: translateX(-${window.pageYOffset / 8}px);
      `;
      return;
    }
  };

  return (
    <div className="pages branding-page-container">
      <div className="UIUX-content">
        <div className="UIUX-main" ref={brandingPageRef}>
          <GridContainer>
            <div>
              <h2 className="branding-h2">UI UX Design</h2>
              <DescContainer>
                <p className="UIUX-desc">
                  We take care of the creation, construction, and development of the brand, we know that each one is different and has a
                  unique experience, so it is important to know that essence that makes them different from the others. Finding the DNA of
                  your digital brand is our purpose.
                </p>
              </DescContainer>

              <Link to="/ui-ux" className="see-more-button branding-btn">
                see more
              </Link>
            </div>
          </GridContainer>
          <div className="UIUX-image-container">
            <img src={uiUxImage} alt="sit-relax" ref={mascotImageRef} />
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
