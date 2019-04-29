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

describe('Linked List', () => {
    test('It begins with the count equals to zero', () => {
        const linkedList = new LinkedList(0);
        expect(linkedList.count).toBe(0);
    });

    test('It accets any value as the elements, except null and undefined', () => {
        expect(() => new LinkedList(null)).toThrow(TypeError);
    });

    test('It begins with the head set to null if arr is empty', () => {
        const linkedList = new LinkedList([]);
        expect(linkedList.head).toBeNull();
    });

    test('It accepts an array of one value as element', () => {
        const linkedList = new LinkedList(['val']);
        expect(linkedList.head.value).toBe('val');
        expect(linkedList.tail).toBeNull();
    });

    test('It accepts an array of two values as elements', () => {
        const linkedList = new LinkedList(['val1', 'val2']);
        expect(linkedList.head).toEqual(expect.any(Node));
        expect(linkedList.tail.value).toBe('val2');
    });

    test('It accepts an array of n values as elements', () => {
        let source = [];
        for (let i = 0; i < 100; i++) source.push(i);

        const linkedList = new LinkedList([...source]);
        expect(linkedList.count).toBe(source.length);

        const listElements = [];
        let current = linkedList.head;

        while (true) {
            listElements.push(current.value);
            
            if (current.next === null) {
                break
            } else {
                current = current.next;
            }
        }
        
        expect(listElements).toEqual(source);
    });
});
