'use strict';

/**
 * Given a string, reverse all of its vowels.
 * @param {string} s - the string to have its vowels reversed.
 * @return {string} the string with the vowels in reversed order.
 */
const reverseVowels = function(s) {
    const isVowel = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,

        'A': true,
        'E': true,
        'I': true,
        'O': true,
        'U': true
    }

    let reversed = s.split('');

    // Reverse the vowels in the copy of the string.
    let leftI = 0;
    let rightI = reversed.length - 1;

    while (leftI <= rightI) {
        if (isVowel[reversed[leftI]] && isVowel[reversed[rightI]]) {
            // Reverse the two vowels.
            [reversed[leftI], reversed[rightI]] = [reversed[rightI], reversed[leftI]];

            leftI++;
            rightI--;
        } else if (isVowel[reversed[leftI]]) {
            rightI--;
        } else if (isVowel[reversed[rightI]]) {
            leftI++;
        } else {
            leftI++;
            rightI--;
        }
    }

    return reversed.join('');
};

module.exports = { reverseVowels };
