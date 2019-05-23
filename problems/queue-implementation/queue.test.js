'use strict';

const { Queue } = require('./queue');

describe('Queue', () => {
    test('it enqueues a value', () => {
        const queue = new Queue();
        queue.enqueue(1);
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

    test('it contains a count property initially set to 0', () => {
        const queue = new Queue();
        expect(queue.count).toBe(0);
    });

    test('it contains a count property set to how many values were enqueued', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.count).toBe(1);
    });

    test('it contains a count property set to how many values are in the list', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        expect(queue.count).toBe(2);
    });

    test('it contains a count property set to 0 when all values are dequeued', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.count).toBe(0);
    });
});
