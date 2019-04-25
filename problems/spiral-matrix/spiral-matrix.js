'use strict';

/**
 * Given a matrix of m lines and n columns, mounts an array by getting the matrix elements
 * in spiral order.
 * @param {Array} arr - the array to extract and mount the spiral matrix from.
 * @returns {Array} the array with the elements of matrix placed in spiral order.
 */
function getSpiral(matrix) {
    if (!Array.isArray(matrix)) {
        throw new TypeError();
    }

    // Get the number of lines and columns, and check if this matrix isn't empty.
    const lines = matrix.length;
    let columns;
    try {
        columns = matrix[0].length;
    } catch(_) {
        columns = 0;
    }

    let spiral = [];

    if (lines > 0 && columns > 0) {
        const concatSpiral = arr => { spiral = spiral.concat(arr); }

        // Start extracting the outer spiral matrix:

        // Begin in the first line, from left to right.
        concatSpiral(matrix.shift());

        // Continue in the second line, and last columns, from top to bottom.
        for (let m = 0; m < matrix.length; m++) {
            concatSpiral(matrix[m].pop());
        }

        // If there's more than one line, continue from right to left in the last line and the column before the last one:
        concatSpiral((matrix.pop() || []).reverse());

        // Finish the outer spiral matrix (from bottom to top, excluding the first columns in the first and last lines):
        // If there's middle columns (the matrix is greater than a 2 by 2).
        for (let m = (matrix.length - 1); m >= 0; m--) {
            concatSpiral(matrix[m].shift() || []);
        }

        // Get the internal spirals recursively:
        concatSpiral(getSpiral(matrix));
    }

    return spiral;
}

module.exports = { getSpiral };
