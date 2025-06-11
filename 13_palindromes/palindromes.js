const palindromes = function (text) {
   const strippedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase();
   const reversedText = strippedText.split('').reverse().join('');

   return strippedText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
