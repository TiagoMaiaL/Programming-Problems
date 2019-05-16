'use strict';

/**
 * Given a string containing the jewels chars, and a string containing the stones chars, 
 * count how many stones are jewels.
 * @param {String} jewels - string containing a char for each kind of jewel.
 * @param {String} stones - string containing a char for each kind of stone.
 * @returns {Number} the amount of jewels in stones.
 */
const numJewelsInStones = function(jewels, stones) {
    let jewelsCount = 0;
    
    for (let stone of stones) {
        for (let jewelType of jewels) {
            if (stone === jewelType) {
                jewelsCount++;
            }
        }
    }
    
    return jewelsCount;
};

module.exports = { numJewelsInStones };
