'use strict';

const { lengthOfLastWord } = require('./length-last-word');

describe('lengthOfLastWord', () => {
    test('it returns 5 for the string "Hello World"', () => {
        expect(lengthOfLastWord('Hello World')).toBe(5);
    });

    test('it returns 1 for the string "a "', () => {
        expect(lengthOfLastWord('a ')).toBe(1);
    });

    test('it returns 0 for the string ""', () => {
        expect(lengthOfLastWord('')).toBe(0);
    });

    test('it returns 1 for the string "test a a "', () => {
        expect(lengthOfLastWord('test a a ')).toBe(1);
    });

    test('it returns 3 for the string "test a a asd"', () => {
        expect(lengthOfLastWord('test a a asd')).toBe(3);
    });
});
