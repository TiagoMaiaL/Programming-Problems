'use strict';

const { flipAndInvertImage } = require('./flipping-image');

describe('flipAndInvertImage', () => {
    test('it flips and reverses an empty image', () => {
        expect(flipAndInvertImage([[]])).toEqual([[]]);
    });

    test('it flips and reverses a 1x1 image', () => {
        expect(flipAndInvertImage([[1]])).toEqual([[0]]);
    });

    test('it flips and reverses a 1x3 image', () => {
        expect(flipAndInvertImage([[1, 1, 0]])).toEqual([[1, 0, 0]]);
    });

    test('it flips and reverses a 2x3 image', () => {
        const image = [
            [0, 0, 1],
            [1, 1, 0]
        ];
        const output = [
            [0, 1, 1],
            [1, 0, 0]
        ]

        expect(flipAndInvertImage(image)).toEqual(output);
    });

    test('it flips and reverses a 3x3 image', () => {
        const image = [
            [1, 1, 0],
            [1, 0, 1],
            [0, 0, 0]
        ];
        const output = [
            [1, 0, 0],
            [0, 1, 0],
            [1, 1, 1]
        ];

        expect(flipAndInvertImage(image)).toEqual(output);
    });

    test('it flips and reverses a 4x4 image', () => {
        const image = [
            [1,1,0,0],
            [1,0,0,1],
            [0,1,1,1],
            [1,0,1,0]
        ];
        const output = [
            [1,1,0,0],
            [0,1,1,0],
            [0,0,0,1],
            [1,0,1,0]
        ];

        expect(flipAndInvertImage(image)).toEqual(output);
    });
});
