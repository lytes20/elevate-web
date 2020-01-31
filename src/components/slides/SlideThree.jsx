import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slidethree.scss';
import { btlTextImage } from '../../assets';

export default function SlideThree() {
  const digitalImageContainer = useRef(null);
  const digitalTextContainer = useRef(null);
  const heartImage = useRef(null);

  //   useEffect(() => showBulb());
  //   function showBulb() {
  //     setTimeout(() => {
  //       digitalTextContainer.current.className += ' show-digital-text';
  //       digitalImageContainer.current.className += ' show-heart';
  //     }, 1200);
  //     setTimeout(() => {
  //       heartImage.current.classList.remove('imageSpin');
  //     }, 1800);
  //   }
  return (
    <div className="slide-three-container">
      <div className="slide-three-banner">
        <div className="btl-image-text-container" ref={digitalTextContainer}>
          <img src={btlTextImage} alt="btl text" />
        </div>
        <div className="split-letters-container">
          <div>tangible </div>
          <div>creativity</div>
        </div>
      </div>

      {/* <div className="overlay">
        <div className="hearts" ref={digitalImageContainer}>
          <div className="hearts-container">
            <div className="love-gif-container love-gif-left">
              <img src={loveLovy} alt="double-tap" />
            </div>
            <div className="heart-image-container">
              <img className="imageSpin" src={heartMainImage} alt="heart main" ref={heartImage} />
            </div>
            <div className="love-gif-container love-gif-right">
              <img src={loveLovy} alt="double-tap" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
