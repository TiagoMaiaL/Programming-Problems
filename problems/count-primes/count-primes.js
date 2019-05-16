'use strict';

/**
 * Given a number, checks if it's prime or not.
 * @param {Number} n - the number to be checked.
 * @returns {Boolean} true if it's prime, false otherwise.
 */
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

/**
 * Given a number, counts the number of prime numbers less than it.
 * @param {number} n - a non-negative integer.
 * @return {number} the number of primes less than it.
 */
function countPrimes(n) {
    const numbers = [];

    for (let i = 2; i < n; i++) {
        numbers.push(i);
    }

    // console.log(numbers);
    return numbers.filter(isPrime).length;
};

module.exports = { countPrimes };
