'use strict';

/**
 * Given an array containing stones weights, 
 * smashes them with each other and returns the remaining weight.
 * @param {number[]} stones - the weights of the stones.
 * @return {number} last stone weight.
 */
const lastStoneWeight = stones => { 
    const ascending = (x, y) => x - y;

    if (stones.length === 0) {
        return 0;
    } else if (stones.length === 1) {
        return stones.pop();
    } else {
        do {
            stones.sort(ascending)
    
            const y = stones.pop();
            const x = stones.pop();
    
            stones.push(y - x);
        } while (stones.length > 1);
    
        return stones.pop();
    }
};

module.exports = { lastStoneWeight };
