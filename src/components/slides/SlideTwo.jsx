import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slidetwo.scss';
import { heartMainImage, instaLike, logoLimeGreen } from '../../assets';
import { splitLetters } from '../../utils';

export default function SlideTwo() {
  const slideTwoContainer = useRef(null);
  const digitalImageContainer = useRef(null);
  // const digitalTextContainer = useRef(null);
  const heartImage = useRef(null);
  let letters = null;
  var lettersArray = [];

  let timeOutFunctionOne = null;
  let timeOutFunctionTwo = null;
  let timeOutFunctionThree = null;

  useEffect(() => {
    letters = document.getElementsByClassName('letters');
    showBulb();
    handleLettersAnimation();
    setTimeout(() => showSlide(), 0.2);
    return () => {
      clearTimeout(timeOutFunctionOne);
      clearTimeout(timeOutFunctionTwo);
      clearTimeout(timeOutFunctionThree);
    };
  }, []);
  const showSlide = () => {
    timeOutFunctionOne = slideTwoContainer.current.classList.add('full-height');
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
  function showBulb() {
    timeOutFunctionTwo = setTimeout(() => {
      // digitalTextContainer.current.className += ' show-digital-text';
      digitalImageContainer.current.className += ' show-heart';
    }, 1200);
    timeOutFunctionThree = setTimeout(() => {
      heartImage.current.classList.remove('imageSpin');
    }, 1800);
  }
  return (
    <div className="slide-two-container" ref={slideTwoContainer}>
      <div className="logo-container right-logo">
        <img src={logoLimeGreen} alt="logo" />
      </div>
      <div className="logo-container left-logo">
        <img src={logoLimeGreen} alt="logo" />
      </div>
      <div className="logo-container bottom-left-logo">
        <img src={logoLimeGreen} alt="logo" />
      </div>
      <div className="insta-like-container right-insta-like">
        <img src={instaLike} alt="insta-like" />
      </div>
      <div className="insta-like-container left-insta-like">
        <img src={instaLike} alt="insta-like" />
      </div>
      <div className="insta-like-container bottom-left-insta-like">
        <img src={instaLike} alt="insta-like" />
      </div>
      <div className="overlay">
        <div className="hearts" ref={digitalImageContainer}>
          <div className="hearts-container">
            <div className="heart-image-container">
              <img className="heart-image" src={heartMainImage} alt="heart main" ref={heartImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
