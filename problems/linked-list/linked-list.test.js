'use strict';

const { LinkedList, Node } = require('./linked-list');

describe('Node', () => {
    test('It begins with a null value', () => {
        const node = new Node();
        expect(node.value).toBeNull();
    });

    test('It accepts the value as the first argument', () => {
        const node = new Node('testing');
        expect(node.value).toBe('testing');
    });

    test('It begins with the previous node reference set to null', () => {
        const node = new Node();
        expect(node.previous).toBeNull();
    });

    test('It accepts the previous node reference as the second argument', () => {
        const previous = new Node(2);
        const current = new Node(3, previous);
        expect(current.previous).toBe(previous);
    });

    test('It begins with the next node reference set to null', () => {
        const node = new Node(0);
        expect(node.next).toBeNull();
    });

    test('It accepts the next node reference as the last argument', () => {
        const next = new Node(1);
        const current = new Node(0, undefined, next);
        expect(current.next).toBe(next);
    });
});
