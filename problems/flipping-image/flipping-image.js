'use strict';

/**
 * Given a matrix A representing an image, flips the image horizontally and then invert it.
 * @param {number[][]} A - the image binary matrix.
 * @return {number[][]} the flipped and reverted image.
 */
const flipAndInvertImage = A => A.map(row => row.map(val => val ^= 1).reverse());
    
/**
 * Given a matrix A representing an image, flips the image horizontally and then invert it.
 * @param {number[][]} A - the image binary matrix.
 * @return {number[][]} the flipped and reverted image.
 */
// const flipAndInvertImage = A => {
//     const invert = val => val ^= 1;

//     for (let rowI = 0; rowI < A.length; rowI ++) {
//         const row = A[rowI];

//         let start = 0;
//         let end = row.length - 1;

//         while (start <= end) {
//             const tempStart = invert(row[start]);
//             row[start] = invert(row[end]);
//             row[end] = tempStart;

//             start++, end--;
//         }
//     }

//     return A;
// };

module.exports = { flipAndInvertImage };
