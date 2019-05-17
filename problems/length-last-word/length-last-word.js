'use strict';

/**
 * Given a string s, computes the length of the last word.
 * @param {string} s - the string containing the words.
 * @return {number} the length of the last word.
 */
var lengthOfLastWord = function(s) {
    // Solution one gives me 68ms, 34% faster. Memory usage is 59% less.
    // The complexity here is O(n).
    // return (s.split(' ').filter(word => word.length >= 1).pop() || '').length;

    // Solution two gives me 48ms, 98.79% faster. Memory usage is 97.46% less, 
    // it's the one I'm using.
    let i = s.length - 1;
    let separator = ' ';
    let lastWord = '';
    
    while (i > -1) {
        let letter = s[i];
        
        if (letter !== separator) {
            lastWord += letter;
        } else if (letter === separator && lastWord.length > 0) {
            break;
        }

        i--;
    }

    return lastWord.length;
};

module.exports = { lengthOfLastWord };
