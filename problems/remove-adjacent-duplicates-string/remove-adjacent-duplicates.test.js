'use strict';

const { removeDuplicates } = require('./remove-adjacent-duplicates');

describe('removeDuplicates', () => {
    test('it returns "" for the string ""', () => {
        expect(removeDuplicates('')).toBe('');
    });

    test('it returns "a" for the string "a"', () => {
        expect(removeDuplicates('a')).toBe('a');
    });

    test('it returns "a" for the string "aa"', () => {
        expect(removeDuplicates('aa')).toBe('');
    });

    test('it returns "" for the string "abba"', () => {
        expect(removeDuplicates('abba')).toBe('');
    });

    test('it returns "bauz" for the string "abbabauzezze"', () => {
        expect(removeDuplicates('abbabauzezze')).toBe('bauz');
    });

    test('it returns "ca" for the string "abbaca"', () => {
        expect(removeDuplicates('abbaca')).toBe('ca');
    });
});
