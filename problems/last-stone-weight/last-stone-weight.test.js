'use strict';

const { lastStoneWeight } = require('./last-stone-weight');

describe('lastStoneWeight', () => {
    test('it returns 0 if no stones were passed', () => {
        expect(lastStoneWeight([])).toBe(0);
    });

    test('it returns 1 if one stone of 1kg is passed', () => {
        expect(lastStoneWeight([1])).toBe(1);
    });

    test('it returns 0 if [1, 1] is passed', () => {
        expect(lastStoneWeight([1, 1])).toBe(0);
    });

    test('it returns 1 if [2, 1] is passed', () => {
        expect(lastStoneWeight([2, 1])).toBe(1);
    });

    test('it returns 5 if [11, 6] is passed', () => {
        expect(lastStoneWeight([11, 6])).toBe(5);
    });

    test('it returns 1 if [1, 1, 1] is passed', () => {
        expect(lastStoneWeight([1, 1, 1])).toBe(1);
    });

    test('it returns 2 if [8, 10, 4] is passed', () => {
        expect(lastStoneWeight([8, 10, 4])).toBe(2);
    });
});
