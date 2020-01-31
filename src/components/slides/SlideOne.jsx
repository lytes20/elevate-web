import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slideone.scss';
import { bulbImage, brandingTextImage, smallBulb } from '../../assets';

export default function SlideOne() {
  const bulbImageContainer = useRef(null);
  const brandingText = useRef(null);

  useEffect(() => showBulb());
  function showBulb() {
    setTimeout(() => {
      brandingText.current.className += ' show-branding-text';
      bulbImageContainer.current.className += ' show-bulb';
    }, 1200);
  }
  return (
    <div className="slide-one-container">
      <div className="slide-one-content">
        <div className="small-bulb-image-container left-bulb">
          <img src={smallBulb} alt="small bulb" />
        </div>
        <div className="small-bulb-image-container right-bulb">
          <img src={smallBulb} alt="small bulb" />
        </div>
        <div className="branding-text" ref={brandingText}>
          <img src={brandingTextImage} alt="branding text" />
        </div>
        <div className="split-letters-container">
          <div>Let</div>
          <div>Ideas</div>
          <div>Fly</div>
        </div>
        <div className="bulb-image-container" ref={bulbImageContainer}>
          <img src={bulbImage} alt="bulb" />
        </div>
      </div>
    </div>
  );
}
