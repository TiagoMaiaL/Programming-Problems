'use strict';

const { Queue } = require('./queue');

describe('Queue', () => {
    test('it begins with no elements', () => {
        const queue = new Queue();
        expect(queue.elements).toEqual([]);
    });

    test('it enqueues a value', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.elements).toEqual([1]);
    });

    test('it enqueues a value in a FIFO order', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.elements).toEqual([1, 2, 3, 4]);
    });

    test('it dequeues a value', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.dequeue()).toEqual(1);
    });

    test('it dequeues the values in a FIFO order', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);

        expect(queue.dequeue()).toEqual(1);
        expect(queue.dequeue()).toEqual(2);
        expect(queue.dequeue()).toEqual(3);
        expect(queue.dequeue()).toEqual(4);
    });
});
