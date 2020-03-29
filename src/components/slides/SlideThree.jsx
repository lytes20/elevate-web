import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slidethree.scss';
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
        {/* <div className="btl-image-text-container" ref={digitalTextContainer}>
          <img src={btlTextImage} alt="btl text" />
        </div> */}
        <div className="slide-three-letters">
          <div className="letters">Tangible</div>
          &nbsp;
          <div className="letters">Creativity</div>
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
