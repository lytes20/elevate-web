import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slidetwo.scss';
import { heartMainImage, digitalTextImage, loveLovy, smilingEmoji } from '../../assets';
import { splitLetters } from '../../utils';

export default function SlideTwo() {
  const slideTwoContainer = useRef(null);
  const digitalImageContainer = useRef(null);
  const digitalTextContainer = useRef(null);
  const heartImage = useRef(null);
  const emojiImageContainer = useRef(null);
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
      digitalTextContainer.current.className += ' show-digital-text';
      digitalImageContainer.current.className += ' show-heart';
    }, 1200);
    timeOutFunctionThree = setTimeout(() => {
      heartImage.current.classList.remove('imageSpin');
      emojiImageContainer.current.className += ' move-emoji'
    }, 1800);
  }
  return (
    <div className="slide-two-container" ref={slideTwoContainer}>
      <div className="digital-text-container" ref={digitalTextContainer}>
        <img src={digitalTextImage} alt="digital text" />
      </div>
      <div className="slide-two-letters">
        <div className="letters">Viralize</div>
        &nbsp;
        <div className="letters">Your</div>
        &nbsp;
        <div className="letters">Brand</div>
      </div>
      <div className="overlay">
        <div className="hearts" ref={digitalImageContainer}>
          <div className="hearts-container">
            <div className="love-gif-container love-gif-left">
              <img src={loveLovy} alt="double-tap" />
            </div>
            <div className="heart-image-container">
              <div className="emoji-image-container" ref={emojiImageContainer}>
                <img src={smilingEmoji} alt="smiling emoji" className="emoji-image" />
              </div>
              <img className="heart-image imageSpin" src={heartMainImage} alt="heart main" ref={heartImage} />
            </div>
            <div className="love-gif-container love-gif-right">
              <img src={loveLovy} alt="double-tap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
