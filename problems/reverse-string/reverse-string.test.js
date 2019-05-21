'use strict';

const { reverseString } = require('./reverse-string');

describe('reverseString', () => {
    test('it reverses an empty string', () => {
        let s = [];
        reverseString(s);
        expect(s).toEqual([]);
    });

    test('it reverses a single char string', () => {
        let s = ['a'];
        reverseString(s);
        expect(s).toEqual(['a']);
    });

    test('it reverses a two chars string', () => {
        let s = ['a', 'b'];
        reverseString(s);
        expect(s).toEqual(['b', 'a']);
    });

    test('it reverses a three chars string', () => {
        let s = ['a', 'b', 'c'];
        reverseString(s);
        expect(s).toEqual(['c', 'b', 'a']);
    });

    test('it reverses a four chars string', () => {
        let s = ['a', 'b', 'c', 'd'];
        reverseString(s);
        expect(s).toEqual(['d', 'c', 'b', 'a']);
    });

    test('it reverses a 10 chars string', () => {
        let s = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        reverseString(s);
        expect(s).toEqual(['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']);
    });
});
