'use strict';

const { findSingleInteger } = require('./numbers-appear-once');

describe('Numbers appear once', () => {
    test('finding the single integer of a non-array should throw an error', () => {
        expect(() => findSingleInteger(null)).toThrow(TypeError);
    });

    test('finding the single integer of an empty array should return undefined', () => {
        expect(findSingleInteger([])).toBeUndefined();
    });

    test('finding the single integer of an array with one element should return it', () => {
        expect(findSingleInteger([1])).toBe(1);
    });

    test('should find the single integer out of an array with 3 elements', () => {
        expect(findSingleInteger([1, 1, 3])).toBe(3);
    });

    test('should find the single integer out of an array with 3 elements, with the single integer being in the beginning', () => {
        expect(findSingleInteger([9, 2, 2])).toBe(9);
    });

    test('should find the single integer out of an array with 3 elements, with the single integer being in the middle', () => {
        expect(findSingleInteger([2, 9, 2])).toBe(9);
    });

    test('should find the single integer out of an array with 5 elements, with the single integer being in the middle', () => {
        expect(findSingleInteger([1, 1, 7, 2, 2])).toBe(7);
    });

    test('should find the single integer out of an array with 11 elements, with the single integer being in anywhere', () => {
        expect(findSingleInteger([10, 4, 1, 3, 4, 1000, 2, 10, 3, 1, 2])).toBe(1000);
    });

    test('should find the single integer out of an array with 9 elements, with the single integer being in anywhere', () => {
        expect(findSingleInteger([10, 20, 30, 40, 50, 10, 20, 40, 50])).toBe(30);
    });
});
