'use strict';

/**
 * Given an array of integers, find the integer that appears only once in the array.
 * Note: All other integers appear exactly twice in the array, except one.
 * @param {Array} arr - the array containing a single integer to be found.
 * @returns {Number} - the single integer.
 */
function findSingleInteger(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('The array must be a valid one.');
    }

    if (arr.length === 0) {
        return undefined;
    }

    let analyzedIntegers = [];

    for (let i = 0; i < arr.length; i++) {
        const integer = arr[i];
        
        let pairIndex = analyzedIntegers.indexOf(integer);
        if (pairIndex > -1) {
            // Found it, so it's not a single integer.
            // Remove it from the analyzed integers array.
            analyzedIntegers.splice(pairIndex, 1);
        } else {
            // Add it to be analyzed.
            analyzedIntegers.push(integer);
        }
    }

    // By now, the array has the single integer, so return it.
    return analyzedIntegers.shift();
}

module.exports = { findSingleInteger };
