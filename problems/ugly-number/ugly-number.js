'use strict';

/**
 * Given a number, checks if it's ugly or not. 
 * An ugly number is a positive one whose prime factors only include 2, 3 or 5. 
 * @param {number} num - the number to be checked.
 * @return {boolean} true if number is ugly, false otherwise.
 */
var isUgly = function(num) {
    if (num <= 0) {
        return false;
    }

    let result = num;

    while (result % 2 === 0) {
        result = result / 2;
    }

    while (result % 3 === 0) {
        result = result / 3;
    }

    while (result % 5 === 0) {
        result = result / 5;
    }

    return result === 1 
};

module.exports = { isUgly };
