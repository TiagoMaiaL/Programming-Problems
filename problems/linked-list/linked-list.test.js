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

    test('it adds an element to the end of the list even if the list is empty', () => {
        const singlyLinkedList = new SinglyLinkedList([]);
        singlyLinkedList.push('val1');
        
        expect(singlyLinkedList.count).toBe(1);
        expect(singlyLinkedList.head).toBe(singlyLinkedList.tail);
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

    test('It removes the last element and also updates the head, in case it\'s the only element', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2']);
        singlyLinkedList.pop();
        expect(singlyLinkedList.head).toBe(singlyLinkedList.tail);
    });

    test('Removing the last element changes the head and tail to null', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1']);
        singlyLinkedList.pop();
        expect(singlyLinkedList.head).toBeNull();
        expect(singlyLinkedList.tail).toBeNull();
    });
});

describe('singlyLinkedList.unshift', () => {
    test('It inserts the given value at the beginning of the list', () => {
        const singlyLinkedList = new SinglyLinkedList(['val2']);
        singlyLinkedList.unshift('val1');

        expect(singlyLinkedList.head.value).toBe('val1');
        expect(singlyLinkedList.head.next.value).toBe('val2');
    });

    test('It inserts the given value at the beginning and updates the count', () => {
        const singlyLinkedList = new SinglyLinkedList(['val2']);
        singlyLinkedList.unshift('val1');
        expect(singlyLinkedList.count).toBe(2);
    });
});

describe('singlyLinkedList.shift', () => {
    test('It removes the first value of the list', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2']);
        singlyLinkedList.shift();

        expect(singlyLinkedList.head.value).toBe('val2');
    });

    test('It removes the first value of the list and returns it', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2']);
        expect(singlyLinkedList.shift()).toBe('val1');
    });

    test('It removes the first value of the list and updates the count', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2']);
        singlyLinkedList.shift();

        expect(singlyLinkedList.count).toBe(1);
    });

    test('It removes the first value of the list and updates the tail and head', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2']);
        singlyLinkedList.shift();

        expect(singlyLinkedList.head).toBe(singlyLinkedList.tail);
    });
});

describe('singlyLinkedList.indexOf', () => {
    test('It returns -1 if the list is empty', () => {
        expect((new SinglyLinkedList([])).indexOf('val1')).toBe(-1);
    });

    test('It returns -1 if the value isn\'t found', () => {
        const singlyLinkedList = new SinglyLinkedList(['val2', 'val3']);
        expect(singlyLinkedList.indexOf('val1')).toBe(-1);
    });

    test('It returns the index of the searched value', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2', 'val3']);
        expect(singlyLinkedList.indexOf('val2')).toBe(1);
    });

    test('It returns the value index, if it\'s found', () => {
        const singlyLinkedList = new SinglyLinkedList(['val1', 'val2', 'val3']);
        expect(singlyLinkedList.indexOf('val3')).toBe(2);
    });
});

describe('singlyLinkedList.reduce', () => {
    test('It returns undefined for a list of 0 elements and no initial value', () => {
        const singlyLinkedList = new SinglyLinkedList([]);
        expect(singlyLinkedList.reduce((x, y) => x + y)).toBeUndefined();
    });

    test('It returns the initial value for a list of 0 elements', () => {
        const singlyLinkedList = new SinglyLinkedList([]);
        expect(singlyLinkedList.reduce((x, y) => x + y, 2)).toBe(2);
    });

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

describe('singlyLinkedList.getArrayFromList', () => {
    test('It returns an empty array for a list of zero elements', () => {
        const singlyLinkedList = new SinglyLinkedList([]);
        expect(singlyLinkedList.getArrayFromList()).toEqual([]);
    });

    test('It returns an array of one element for a list of one element', () => {
        const singlyLinkedList = new SinglyLinkedList([1]);
        expect(singlyLinkedList.getArrayFromList()).toEqual([1]);
    });

    test('It returns an array of n elements for a list of n nodes', () => {
        const input = [1, 2, 5, 104, 6, 8, 7, 102, 600, 205, 2323];
        const expectOutput = input;

        const singlyLinkedList = new SinglyLinkedList(input);
        expect(singlyLinkedList.getArrayFromList()).toEqual(expectOutput);
    });
});

describe('singlyLinkedList.insertionSort', () => {
    test('it returns a list of one single node for a linked list of one element', () => {
        const singlyLinkedList = new SinglyLinkedList([1]);
        expect(singlyLinkedList.insertionSort().getArrayFromList()).toEqual([1])
    });

    test('it sorts a linked list of two nodes', () => {
        const singlyLinkedList = new SinglyLinkedList([2, 1]);
        expect(singlyLinkedList.insertionSort().getArrayFromList()).toEqual([1, 2]);
    });

    test('it sorts a linked list of four nodes', () => {
        const singlyLinkedList = new SinglyLinkedList([10, 5, 2, 1]);
        expect(singlyLinkedList.insertionSort().getArrayFromList()).toEqual([1, 2, 5, 10]);
    });

    test('it sorts a linked list of 10 nodes', () => {
        const singlyLinkedList = new SinglyLinkedList([3, 1, 9, 8, 7, 10, 6, 5, 4, 2]);
        expect(singlyLinkedList.insertionSort().getArrayFromList()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test('it sorts a linked list with repeated values', () => {
        const singlyLinkedList = new SinglyLinkedList([3, 1, 9, 8, 7, 10, 7, 6, 8, 5, 4, 2, 1]);
        expect(singlyLinkedList.insertionSort().getArrayFromList()).toEqual([1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 10]);
    });

    test('it sorts a linked list of n nodes', () => {
        const input = [];
        for (let i = 0; i < 200; i++) {
            input.push(Math.floor(Math.random() * i));
        }
        const expectedOutput = [...input].sort((a, b) => a - b);

        const singlyLinkedList = new SinglyLinkedList(input);
        
        expect(singlyLinkedList.insertionSort().getArrayFromList()).toEqual(expectedOutput);
    });
});

describe('singlyLinkedList.reverse', () => {
    test('it returns the reversed empty linked list', () => {
        const singlyLinkedList = new SinglyLinkedList([]);
        expect(singlyLinkedList.reversed().getArrayFromList()).toEqual([]);
    });

    test('it returns the reversed 1->null linked list', () => {
        const singlyLinkedList = new SinglyLinkedList([1]);
        expect(singlyLinkedList.reversed().getArrayFromList()).toEqual([1]);
    });

    test('it returns the reversed 5->1-> linked list', () => {
        const singlyLinkedList = new SinglyLinkedList([1, 5]);
        expect(singlyLinkedList.reversed().getArrayFromList()).toEqual([5, 1]);
    });

    test('it returns the reversed 7->100->1-> linked list', () => {
        const singlyLinkedList = new SinglyLinkedList([1, 100, 7]);
        expect(singlyLinkedList.reversed().getArrayFromList()).toEqual([7, 100, 1]);
    });

    test('it returns the reversed 100->99->98->97->96->95->94->93->92->91->90 linked list', () => {
        const singlyLinkedList = new SinglyLinkedList([90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
        expect(singlyLinkedList.reversed().getArrayFromList()).toEqual([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]);
    });
});

describe('singlyLinkedList.removeElements', () => {
    test('it doesn\'t do nothing with an empty list', () => {
        const singlyLinkedList = new SinglyLinkedList([]);
        singlyLinkedList.removeElements(1);

        expect(singlyLinkedList.getArrayFromList()).toEqual([]);
    });

    test('it removes the values of 1 from 1->', () => {
        const singlyLinkedList = new SinglyLinkedList([1]);
        singlyLinkedList.removeElements(1);

        expect(singlyLinkedList.getArrayFromList()).toEqual([]);
    });

    test('it removes the values of 1 from 1->1', () => {
        const singlyLinkedList = new SinglyLinkedList([1, 1]);
        singlyLinkedList.removeElements(1);

        expect(singlyLinkedList.getArrayFromList()).toEqual([]);
    });

    test('it removes the values of 1 from 1->1->2', () => {
        const singlyLinkedList = new SinglyLinkedList([1, 1, 2]);
        singlyLinkedList.removeElements(1);

        expect(singlyLinkedList.getArrayFromList()).toEqual([2]);
    });

    test('it removes the values of 5 from 1->5->2->5->2', () => {
        const singlyLinkedList = new SinglyLinkedList([1, 5, 2, 5, 2]);
        singlyLinkedList.removeElements(5);

        expect(singlyLinkedList.getArrayFromList()).toEqual([1, 2, 2]);
    });

    test('it removes the values of 4 from 4->3->5->10->2->8->4->5->2', () => {
        const singlyLinkedList = new SinglyLinkedList([4, 3, 5, 10, 2, 8, 4, 5, 2]);
        singlyLinkedList.removeElements(4);

        expect(singlyLinkedList.getArrayFromList()).toEqual([3, 5, 10, 2, 8, 5, 2]);
    });

    test('it removes the values of 4 from 1->2->2->1', () => {
        const singlyLinkedList = new SinglyLinkedList([1, 2, 2, 1]);
        singlyLinkedList.removeElements(2);

        expect(singlyLinkedList.getArrayFromList()).toEqual([1, 1]);
    });
});
