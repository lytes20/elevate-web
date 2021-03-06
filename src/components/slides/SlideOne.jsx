import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slideone.scss';
import { bulbImage, smallBulb, logoLimeGreen, creativeContentLabel } from '../../assets';
import { splitLetters } from '../../utils';

export default function SlideOne() {
  const slideOneContainer = useRef(null);
  const bulbImageContainer = useRef(null);
  // const brandingText = useRef(null);
  const bulbImageRef = useRef(null);
  const leftSmallBulbImageRef = useRef(null);
  const rightSmallBulbImageRef = useRef(null);
  const slideOneContent = useRef(null);
  let letters = null;
  var lettersArray = [];
  let timeOutFunctionOne = null;
  let timeOutFunctionTwo = null;

  useEffect(() => {
    letters = document.getElementsByClassName('letters');
    timeOutFunctionOne = setTimeout(() => showSlide(), 0.2);
    showBulb();
    handleMouseMovement();
    handleLettersAnimation();
    return () => {
      clearTimeout(timeOutFunctionOne);
      clearTimeout(timeOutFunctionTwo);
    };
  }, []);

  const showSlide = () => {
    slideOneContainer.current.classList.add('full-height');
  };
  /**
   * Handles overall letter animation
   * @returns {void}
   */
  const handleLettersAnimation = () => {
    for (var i = 0; i < letters.length; i++) {
      const spiltLetters = splitLetters(letters[i]);
      lettersArray.push(...spiltLetters);
    }
    for (var i = 0; i < lettersArray.length; i++) {
      lettersArray[i].className = 'letter behind';
      animateLetterIn(lettersArray[i], i);
    }
  };

  /**
   * Handles actual animation
   * @param {HTMLElement} letter - span containing the letter to be animated
   *  * @param {Number} index - position of the letter in the letters array
   * @returns {void}
   */
  function animateLetterIn(letter, index) {
    setTimeout(function() {
      letter.parentElement.style.opacity = 1;
      letter.className = 'letter in';
    }, 400 + index * 80);
  }

  /**
   * Handles showing the bulb
   * @param {object} event - Event that occurs on an input
   * @param {int} capacity - resource quantity
   * @returns {void}
   */
  function showBulb() {
    timeOutFunctionTwo = setTimeout(() => {
      // brandingText.current.className += ' show-branding-text';
      bulbImageContainer.current.className += ' show-bulb';
    }, 1200);
  }

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
    <div className="slide-one-container" ref={slideOneContainer}>
      <div className="slide-one-content" ref={slideOneContent}>
        <div className="small-bulb-image-container left-bulb">
          <img src={smallBulb} alt="small bulb" ref={leftSmallBulbImageRef} />
        </div>
        <div className="small-bulb-image-container right-bulb">
          <img src={smallBulb} alt="small bulb" ref={rightSmallBulbImageRef} />
        </div>
        <div className="logo-container right-logo">
          <img src={logoLimeGreen} alt="logo"/>
        </div>
        <div className="logo-container left-logo">
          <img src={logoLimeGreen} alt="logo"/>
        </div>
        <div className="logo-container bottom-left-logo">
          <img src={logoLimeGreen} alt="logo"/>
        </div>
        <div className="SlideOne-label">
          <img src={creativeContentLabel} alt="creative-content-label"/>
        </div>
        {/* <div className="slide-one-letters">
          <div className="letters">Let</div>
          &nbsp;
          <div className="letters">Ideas</div>
          &nbsp;
          <div className="letters">Fly</div>
        </div> */}
        <div className="bulb-image-container" ref={bulbImageContainer}>
          <img src={bulbImage} alt="bulb" className="bulb-image" ref={bulbImageRef} />
        </div>
      </div>
    </div>
  );
}
