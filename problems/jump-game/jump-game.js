'use strict';

/**
 * Given an array of non-negative integers, determines if the last index can be reached
 * by jumping the current index nums[i] times.
 * @param {Array[Number]} nums 
 * @returns A flag indicating if it's possible to reach the last index.
 */
function canJump(nums) {
    const final = nums.length - 1;
    let currentIndex = 0;
    let maxJump = nums[currentIndex];

    while (currentIndex < final && maxJump > 0) {
        maxJump = nums[currentIndex];
        currentIndex += maxJump;
    }

    return currentIndex >= final;
}

module.exports = { canJump };
