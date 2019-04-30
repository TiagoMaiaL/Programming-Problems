'use strict';

const { SinglyLinkedList, Node } = require('./linked-list');

describe('Node', () => {
    test('It begins with a null value', () => {
        const node = new Node();
        expect(node.value).toBeNull();
    });

    test('It accepts the value as the first argument', () => {
        const node = new Node('testing');
        expect(node.value).toBe('testing');
    });

    test('It begins with the next node reference set to null', () => {
        const node = new Node(0);
        expect(node.next).toBeNull();
    });

    test('It accepts the next node reference as the last argument', () => {
        const next = new Node(1);
        const current = new Node(0, next);
        expect(current.next).toBe(next);
    });
});

describe('Singly Linked List', () => {
    test('It begins with the count equals to zero', () => {
        const singlyLinkedList = new SinglyLinkedList(0);
        expect(singlyLinkedList.count).toBe(0);
    });

    test('It accepts any value as the elements, except null and undefined', () => {
        expect(() => new SinglyLinkedList(null)).toThrow(TypeError);
    });

    test('It begins with the head set to null if arr is empty', () => {
        const singlyLinkedList = new SinglyLinkedList([]);
        expect(singlyLinkedList.head).toBeNull();
    });

    test('It accepts an array of one value as element', () => {
        const singlyLinkedList = new SinglyLinkedList(['val']);
        expect(singlyLinkedList.head.value).toBe('val');
    });

    test('It accepts an array of two values as elements', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2']);
        expect(singlyLinkedList.head).toEqual(expect.any(Node));
        expect(singlyLinkedList.head.next.value).toBe('val2');
    });

    test('It accepts an array of n values as elements', () => {
        let source = [];
        for (let i = 0; i < 100; i++) source.push(i);

        const singlyLinkedList = new SinglyLinkedList([...source]);
        expect(singlyLinkedList.count).toBe(source.length);

        const listElements = [];
        let current = singlyLinkedList.head;

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

    test('It has a tail property', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2', 'val3']);
        expect(singlyLinkedList.tail.value).toBe('val3');
    });

    test('The tail is equals to the head if the list has one element', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1']);
        expect(singlyLinkedList.head).toBe(singlyLinkedList.tail);
    });
});

describe('singlyLinkedList.push', () => {
    test('It adds an element to the end of the list', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1']);
        singlyLinkedList.push('val2');

        expect(singlyLinkedList.tail.value).toBe('val2');
        expect(singlyLinkedList.head.next.value).toBe('val2');
    });

    test('It adds an element and increases the count', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1']);
        singlyLinkedList.push('val2');

        expect(singlyLinkedList.count).toBe(2);
    });
});

describe('singlyLinkedList.pop', () => {
    test('It removes the last element of the list', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2']);
        singlyLinkedList.pop();

        expect(singlyLinkedList.tail.value).toBe('val1');
    });

    test('It removes the last element and descreases the count', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2']);
        singlyLinkedList.pop();

        expect(singlyLinkedList.count).toBe(1);
    });

    test('It removes the last element and returns it', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2']);
        expect(singlyLinkedList.pop()).toBe('val2');
    });
});

describe('singlyLinkedList.reduce', () => {
    test('It returns the single list value if the list is of length 1', () => {
        const singlyLinkedList = new SinglyLinkedList([1]);
        expect(singlyLinkedList.reduce((x, y) => x + y)).toBe(1);
    });

    test('It returns the expected summed value', () => {
        const singlyLinkedList = new SinglyLinkedList([1, 2, 3, 4, 5]);
        expect(singlyLinkedList.reduce((x, y) => x + y)).toBe(15);
    });

    test('It returns the expected summed value when the initial value to reduce is provided', () => {
        const singlyLinkedList = new SinglyLinkedList([1, 2, 3, 4, 5]);
        expect(singlyLinkedList.reduce((x, y) => x + y, 5)).toBe(20);
    });
});
