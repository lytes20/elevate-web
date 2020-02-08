/**
 * Split letters in the divs and put them in spans
 * @param {HTMLCollection} word - div containing the letters
 * @returns {Array}
 */
export const splitLetters = word => {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  return letters;
};
