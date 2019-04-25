'use strict';

const { getSpiral } = require('./spiral-matrix');

describe('Spiral Matrix', () => {
    test('getting a spiral of a non-matrix object throws an error', () => {
        expect(() => {
            getSpiral(null);
        }).toThrow(TypeError);
    })

    test('a spiral of an empty matrix is an empty array', () => {
        expect(getSpiral([])).toEqual([]);
    });

    test('a spiral of a 1 by 1 matrix is an array with the single element', () => {
        expect(getSpiral( [ [1] ] )).toEqual([1]);
    })

    test('a spiral of a 1 by 2 matrix is an array with 2 elements in spiral order (left to right)', () => {
        expect(getSpiral( [ [2, 1] ] )).toEqual([2, 1]);
    });

    test('a spiral of a 2 by 1 matrix is an array with 2 elements in spiral order (top to bottom)', () => {
        expect(getSpiral( [ [6], [3] ] )).toEqual([6, 3]);
    });

    test('a spiral of a 2 by 2 matris is an array with 4 elements in spiral order (left to right, top to bottom, right to left', () => {
        const input = [
            [120, 25],
            [555, 12]
        ];
        expect(getSpiral(input)).toEqual([120, 25, 12, 555]);
    });

    test('a spiral of a 3 by 3 matrix is an array with 9 elements in spiral order', () => {
        const input = [
            [555, 254, 230],
            [123, 112, 444],
            [213, 137, 902]
        ];
        expect(getSpiral(input)).toEqual([555, 254, 230, 444, 902, 137, 213, 123, 112]);
    });

    test('a spiral of a 3 by 4 matrix is an array with 12 elements in spiral order', () => {
        const input = [
            [555, 254, 230, 500],
            [123, 112, 444, 600],
            [213, 137, 902, 890]
        ];
        expect(getSpiral(input)).toEqual([555, 254, 230, 500, 600, 890, 902, 137, 213, 123, 112, 444]);
    });

    test('a spiral of a 4 by 3 matrix is an array with 12 elements in spiral order', () => {
        const input = [
            [100, 555, 254],
            [2  , 123, 112],
            [12 , 137, 902],
            [5  , 254, 230],
        ];
        expect(getSpiral(input)).toEqual([100, 555, 254, 112, 902, 230, 254, 5, 12, 2, 123, 137]);
    });

    test('a spiral of a 4 by 6 matrix is an array with 24 elements in spiral order', () => {
        const input = [
            [100, 555, 254, 689, 901, 15 ],
            [2  , 123, 112, 245, 123, 156],
            [12 , 137, 902, 112, 759, 699],
            [5  , 254, 230, 891, 915, 239],
        ];
        expect(getSpiral(input)).toEqual([100, 555, 254, 689, 901, 15, 156, 699, 239, 915, 891, 230, 254, 5, 12, 2, 123, 112, 245, 123, 759, 112, 902, 137]);
    });

    test('a spiral of a 6 by 3 matrix is an array with 18 elements in spiral order', () => {
        const input = [
            [100, 555, 761],
            [2  , 123, 112],
            [12 , 55 , 902],
            [7  , 24 , 992],
            [109, 145, 111],
            [17 , 175, 999]
        ];
        expect(getSpiral(input)).toEqual([100, 555, 761, 112, 902, 992, 111, 999, 175, 17, 109, 7, 12, 2, 123, 55, 24, 145]);
    });

    test('a spiral of a 6 by 4 matrix is an array with 18 elements in spiral order', () => {
        const input = [
            [100, 555, 761, 199],
            [2  , 123, 112, 111],
            [12 , 55 , 902, 394],
            [7  , 24 , 992, 387],
            [109, 145, 111, 182],
            [17 , 175, 999, 104]
        ];
        expect(getSpiral(input)).toEqual([100, 555, 761, 199, 111, 394, 387, 182, 104, 999, 175, 17, 109, 7, 12, 2, 123, 112, 902, 992, 111, 145, 24, 55]);
    });
});
