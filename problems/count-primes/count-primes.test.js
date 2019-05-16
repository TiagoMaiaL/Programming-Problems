'use strict';

const { countPrimes } = require('./count-primes');

describe('count primes', () => {
    test('it returns 0 for the number 1', () => {
        expect(countPrimes(1)).toBe(0);
    });

    test('it returns 0 for the number 2', () => {
        expect(countPrimes(2)).toBe(0);
    });

    test('it returns 1 for the number 3', () => {
        expect(countPrimes(3)).toBe(1);
    });

    test('it returns 2 for the number 4', () => {
        expect(countPrimes(4)).toBe(2);
    });

    test('it returns 2 for the number 5', () => {
        expect(countPrimes(5)).toBe(2);
    });

    test('it returns 3 for the number 6', () => {
        expect(countPrimes(6)).toBe(3);
    });

    test('it returns 4 for the number 8', () => {
        expect(countPrimes(8)).toBe(4);
    });

    test('it returns 5 for the number 12', () => {
        expect(countPrimes(12)).toBe(5);
    });

    test('it returns n for the number 499979', () => {
        expect(countPrimes(499979)).toBe(5);
    });
});
