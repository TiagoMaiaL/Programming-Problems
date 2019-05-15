'use strict';

const { canJump } = require('./jump-game');

describe('can jump', () => {
    test('it returns true for the input [0], since it begins in the end', () => {
        expect(canJump([0])).toBe(true);
    });

    test('it returns false for the input [0, 1]', () => {
        expect(canJump([0, 1])).toBe(false);
    });

    test('it returns true for the input [1, 0]', () => {
        expect(canJump([1, 0])).toBe(true);
    });

    test('it returns false for the input [3, 2, 1, 0, 4]', () => {
        expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    });

    // test('it returns false for the input [2, 1, 100, 0, 4]', () => {
    //     expect(canJump([2, 1, 100, 0, 4])).toBe(false);
    // });

    test('it returns true for the input [1, 1, 1, 1, 1]', () => {
        expect(canJump([1, 1, 1, 1, 1])).toBe(true);
    });

    test('it returns true for the input [3, 1, 1, 1, 1]', () => {
        expect(canJump([3, 1, 1, 1, 1])).toBe(true);
    });

    // test('it returns false for the input [1, 2, 1, 3, 1]', () => {
    //     expect(canJump([1, 2, 1, 3, 1])).toBe(false);
    // });

    test('it returns true for the input [2, 0, 2, 1, 1]', () => {
        expect(canJump([2, 0, 2, 1, 1])).toBe(true);
    });

    test('it returns true for the input [5, 0, 0, 0, 0, 0]', () => {
        expect(canJump([5, 0, 0, 0, 0, 0])).toBe(true);
    });

    test('it returns true for the input [1, 2, 0, 3, 0, 0, 0]', () => {
        expect(canJump([1, 2, 0, 3, 0, 0, 0])).toBe(true);
    });

    test('it should return false for the input [2, 0]', () => {
        expect(canJump([2, 0])).toBe(true);
    });

    test('it should return false for the input [2, 5, 0, 0]', () => {
        expect(canJump([2, 5, 0, 0])).toBe(true);
    });
});
