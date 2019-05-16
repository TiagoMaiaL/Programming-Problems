'use strict';

const { numJewelsInStones } = require('./jewels-stones');

describe('numJewelsInStones', () => {
    test('it returns 0 for J = "" and S = ""', () => {
        expect(numJewelsInStones('', '')).toBe(0);
    });

    test('it returns 0 for J = "" and S = "aad"', () => {
        expect(numJewelsInStones('', 'aad')).toBe(0);
    });

    test('it returns 0 for J = "z" and S = "aad"', () => {
        expect(numJewelsInStones('z', 'aad')).toBe(0);
    });

    test('it returns 1 for J = "z" and S = "zad"', () => {
        expect(numJewelsInStones('z', 'zad')).toBe(1);
    });

    test('it returns 1 for J = "d" and S = "zad"', () => {
        expect(numJewelsInStones('d', 'zad')).toBe(1);
    });

    test('it returns 2 for J = "z" and S = "zzd"', () => {
        expect(numJewelsInStones('z', 'zzd')).toBe(2);
    });

    test('it returns 8 for J = "z" and S = "zzzzzzzz"', () => {
        expect(numJewelsInStones('z', 'zzzzzzzz')).toBe(8);
    });

    test('it returns 2 for J = "zd" and S = "zad"', () => {
        expect(numJewelsInStones('zd', 'zad')).toBe(2);
    });

    test('it returns 5 for J = "zd" and S = "zdzdz"', () => {
        expect(numJewelsInStones('zd', 'zdzdz')).toBe(5);
    });
});
