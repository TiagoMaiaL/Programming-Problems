'use strict';

const { reverseVowels } = require('./reverse-vowels');

describe('reverse-vowels', () => {
    test('it reverses an empty string', () => {
        expect(reverseVowels('')).toBe('');
    });

    test('it reverses a one vowel string', () => {
        expect(reverseVowels('a')).toBe('a');
    });

    test('it doesn\'t reverse a string without vowels', () => {
        expect(reverseVowels('vfg')).toBe('vfg');
    });

    test('it reverses a string if it only contains vowels', () => {
        expect(reverseVowels('ae')).toBe('ea');
    });

    test('it reverses a string containing vowels and consonants', () => {
        expect(reverseVowels('monkey')).toBe('menkoy');
        expect(reverseVowels('abcdefghi')).toBe('ibcdefgha');
    });

    test('it reverses a string containing vowels in upper case letters', () => {
        expect(reverseVowels('aA')).toBe('Aa');
    });
});
