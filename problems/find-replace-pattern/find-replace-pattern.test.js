'use strict';

const { findAndReplacePattern } = require('./find-replace-pattern');

describe('findReplacePattern', () => {
    test('it returns an empty array of words if an empty array of words is passed', () => {
        expect(findAndReplacePattern([], 'aaa')).toEqual([]);
    });

    test('it returns the words tha match the abc pattern', () => {
        const words = [
            'xyz',
            'def',
            'ghi',
            'jkl',
            'eee',
            'zzz',
            'ouo'
        ];
        const expectedOutput = [
            'xyz',
            'def',
            'ghi',
            'jkl'
        ];

        expect(findAndReplacePattern(words, 'abc')).toEqual(expectedOutput);
    });

    test('it returns the words tha match the aab pattern', () => {
        const words = [
            'xxz',
            'ddf',
            'ggi',
            'jjl',
            'eee',
            'zzz',
            'ouo'
        ];
        const expectedOutput = [
            'xxz',
            'ddf',
            'ggi',
            'jjl'
        ];

        expect(findAndReplacePattern(words, 'aab')).toEqual(expectedOutput);
    });

    test('it returns the words tha match the abb pattern', () => {
        const words = [
            'zxx',
            'fdd',
            'igg',
            'ljj',
            'eee',
            'zzz',
            'ouo'
        ];
        const expectedOutput = [
            'zxx',
            'fdd',
            'igg',
            'ljj'
        ];

        expect(findAndReplacePattern(words, 'abb')).toEqual(expectedOutput);
    });

    test('it returns the words tha match the aba pattern', () => {
        const words = [
            'xzx',
            'dfd',
            'gig',
            'jlj',
            'eee',
            'zzz',
            'ouo'
        ];
        const expectedOutput = [
            'xzx',
            'dfd',
            'gig',
            'jlj',
            'ouo'
        ];

        expect(findAndReplacePattern(words, 'aba')).toEqual(expectedOutput);
    });

    test('it returns the words tha match the ccc pattern', () => {
        const words = [
            'xzx',
            'dfd',
            'gig',
            'jlj',
            'eee',
            'zzz',
            'ouo'
        ];
        const expectedOutput = [
            'eee',
            'zzz'
        ];

        expect(findAndReplacePattern(words, 'ccc')).toEqual(expectedOutput);
    });
});
