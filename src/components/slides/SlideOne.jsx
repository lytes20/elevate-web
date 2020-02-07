import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slideone.scss';
import { bulbImage, brandingTextImage, smallBulb } from '../../assets';

export default function SlideOne() {
  const bulbImageContainer = useRef(null);
  const brandingText = useRef(null);
  const bulbImageRef = useRef(null);
  const leftSmallBulbImageRef = useRef(null);
  const rightSmallBulbImageRef = useRef(null);
  const slideOneContent = useRef(null);

  useEffect(() => showBulb());
  useEffect(() => handleMouseMovement());
  function showBulb() {
    setTimeout(() => {
      brandingText.current.className += ' show-branding-text';
      bulbImageContainer.current.className += ' show-bulb';
    }, 1200);
  }

  console.log(slideOneContent);

  function handleMouseMovement() {
    slideOneContent.current.addEventListener('mousemove', e => {
      bulbImageRef.current.style.cssText = `
      transform: translate(-${e.offsetX / 20}px, -${e.offsetY / 20}px);
      `;
      leftSmallBulbImageRef.current.style.cssText = `
      transform: translate(-${e.offsetX / 20}px, -${e.offsetY / 20}px);
      `;
      rightSmallBulbImageRef.current.style.cssText = `
      transform: translate(-${e.offsetX / 20}px, -${e.offsetY / 20}px);
      `;

    });
  }
  return (
    <div className="slide-one-container">
      <div className="slide-one-content" ref={slideOneContent}>
        <div className="small-bulb-image-container left-bulb">
          <img src={smallBulb} alt="small bulb" ref={leftSmallBulbImageRef}/>
        </div>
        <div className="small-bulb-image-container right-bulb">
          <img src={smallBulb} alt="small bulb" ref={rightSmallBulbImageRef} />
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
          <img src={bulbImage} alt="bulb" className="bulb-image" ref={bulbImageRef} />
        </div>
      </div>
    </div>
  );
}
