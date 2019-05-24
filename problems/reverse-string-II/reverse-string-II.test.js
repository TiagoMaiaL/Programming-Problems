'use strict';

const { reverseStr } = require('./reverse-string-II');

describe('reverse string II', () => {
    test('it reverses an empty string', () => {
        expect(reverseStr('')).toBe('');
    });
   
    test('it returns the same string if k is 0', () => {
        expect(reverseStr('asdf', 0)).toBe('asdf');
    });

    test('it returns the same string if k is 1', () => {
        expect(reverseStr('asdf', 1)).toBe('asdf');
    });

    test('it returns a string with the only 2 chars reversed', () => {
        expect(reverseStr('ab', 2)).toBe('ba');
    });

    test('it returns a string with the first 2 chars reversed', () => {
        expect(reverseStr('abfg', 2)).toBe('bafg');
    });

    test('it returns a string with every 3k chars reversed', () => {
        expect(reverseStr('abcdefgh', 3)).toBe('cbadefhg');
    });

    test('it returns the string "abcde" with every 3k chars reversed', () => {
        expect(reverseStr('abcde', 3)).toBe('cbade');
    });

    test('it returns the string "abcdef" with every 2k chars reversed', () => {
        expect(reverseStr('abcdef', 2)).toBe('bacdfe');
    });
});
