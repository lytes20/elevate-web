import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slidethree.scss';
import { uiUxMain, pencil, triRuler, eraser, logoGray } from '../../assets';
import { splitLetters } from '../../utils';

export default function SlideThree() {
  const slideThreeContainer = useRef(null);
  let letters = null;
  var lettersArray = [];
  let timeOutFunctionOne = null;
  let timeOutFunctionTwo = null;

  useEffect(() => {
    letters = document.getElementsByClassName('letters');
    timeOutFunctionOne = setTimeout(() => showSlide(), 0.2);
    handleLettersAnimation();
    return () => {
      clearTimeout(timeOutFunctionOne);
      clearTimeout(timeOutFunctionTwo);
    };
  }, []);

  const showSlide = () => {
    slideThreeContainer.current.classList.add('full-height');
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

  return (
    <div className="slide-three-container" ref={slideThreeContainer}>
      <div className="slide-three-banner">
        <div className="logo-container right-logo">
          <img src={logoGray} alt="logo" />
        </div>
        <div className="logo-container left-logo">
          <img src={logoGray} alt="logo" />
        </div>
        <div className="logo-container bottom-left-logo">
          <img src={logoGray} alt="logo" />
        </div>
        <div className="insta-like-container right-insta-like">
          <img src={eraser} alt="insta-like" />
        </div>
        <div className="pencil-img-container">
          <img src={pencil} alt="insta-like" />
        </div>
        <div className="insta-like-container bottom-left-insta-like">
          <img src={triRuler} alt="insta-like" />
        </div>
        <div className="overlay">
          <div className="ui-ux-img-container">
            <img src={uiUxMain} alt="ui ux main" />
          </div>
        </div>
      </div>
    </div>
  );
}
