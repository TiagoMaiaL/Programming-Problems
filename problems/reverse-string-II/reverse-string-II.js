'use strict';

/**
 * Given a string and a limit k, reverses the chars in the string until index k.
 * @param {string} s - a string.
 * @param {number} k - the index to which the reverse should work.
 * @return {string} the reversed string.
 */
var reverseStr = function(s, k) {
    if (k < 2) {
        return s
    }

    let reversed = s.split('');
    let i = 0;

    while (i < reversed.length - 1) {
        let start = i;
        let end = start + k - 1;

        while (start < end) {
            [reversed[start], reversed[end]] = [reversed[end], reversed[start]];
    
            start++, end--;
        }

        i += 2 * k;
    }

    return reversed.join('');
};

module.exports = { reverseStr };
