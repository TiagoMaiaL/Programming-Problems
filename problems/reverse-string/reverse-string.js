'use strict';

/**
 * Given a string, reverses all of its chars.
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let leftI = 0;
    let rightI = s.length - 1;

    while (leftI <= rightI) {
        // Reverse the indexes.
        [s[leftI], s[rightI]] = [s[rightI], s[leftI]];

        leftI++;
        rightI--;
    }
};

module.exports = { reverseString };
