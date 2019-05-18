'use strict';

const { isUgly } = require('./ugly-number');

describe('isUgly', () => {
    test('it returns false for the number 0', () => {
        expect(isUgly(0)).toBe(false);
    });

    test('it returns false for the negative numbers -1, -2, -3 ...', () => {
        expect(isUgly(-1)).toBe(false);
        expect(isUgly(-5)).toBe(false);
        expect(isUgly(-2)).toBe(false);
        expect(isUgly(-1000000)).toBe(false);
    });

    test('it returns true for the number 1', () => {
        expect(isUgly(1)).toBe(true);
    });

    test('it returns true for the number 2', () => {
        expect(isUgly(2)).toBe(true);
    });

    test('it returns true for the number 3', () => {
        expect(isUgly(3)).toBe(true);
    });

    test('it returns true for the number 5', () => {
        expect(isUgly(5)).toBe(true);
    });

    test('it returns true for the number 2 * 3 = 6', () => {
        expect(isUgly(6)).toBe(true);
    });

    test('it returns true for the number 2 * 5 = 10', () => {
        expect(isUgly(10)).toBe(true);
    });

    test('it returns true for the number 3 * 5 = 15', () => {
        expect(isUgly(15)).toBe(true);
    });

    test('it returns false for the number 7', () => {
        expect(isUgly(7)).toBe(false);
    });

    test('it returns false for the number 11', () => {
        expect(isUgly(11)).toBe(false);
    });

    test('it returns false for the number 7 * 2 = 14', () => {
        expect(isUgly(14)).toBe(false);
    });

    test('it returns false for the number 7 * 10 = 70', () => {
        expect(isUgly(70)).toBe(false);
    });

    test('it returns false for the number 11 * 10 = 110', () => {
        expect(isUgly(110)).toBe(false);
    });

    test('it returns false for the number 7 * 6', () => {
        expect(isUgly(7 * 6)).toBe(false);
    });

    test('it returns true for the number 10 * 10 * 10', () => {
        expect(isUgly(10 * 10 * 10)).toBe(true);
    });

    test('it returns true for the number 10 * 10 * 10 * 6 * 2 * 5', () => {
        expect(isUgly(10 * 10 * 10 * 6 * 2 * 5)).toBe(true);
    });

    test('it returns false for the number 10 * 10 * 10 * 6 * 2 * 5 * 7', () => {
        expect(isUgly(10 * 10 * 10 * 6 * 2 * 5 * 7)).toBe(false);
    });
});
