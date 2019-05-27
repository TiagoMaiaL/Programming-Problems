'use strict';

const { MyQueue } = require('./queue-using-stacks');

describe('MyQueue', () => {
    test('it has a method telling if it\'s empty or not', () => {
        const queue = new MyQueue();
        expect(queue.empty()).toBe(true);
    });

    test('it has a method to push an element into the queue (enqueue operation)', () => {
        const queue = new MyQueue();
        queue.push(1);
        expect(queue.empty()).toBe(false);
    });

    test('it has a method to peek (get the front element)', () => {
        const queue = new MyQueue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.peek()).toBe(1);
    });

    test('it has a method to pop (get the front element)', () => {
        const queue = new MyQueue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.pop()).toBe(1);
    });

    test('it\'s a fully working queue (all operations)', () => {
        const queue = new MyQueue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        
        expect(queue.pop()).toBe(1);
        
        queue.push(4);

        expect(queue.pop()).toBe(2);
        expect(queue.empty()).toBe(false);
        expect(queue.pop()).toBe(3);
        expect(queue.pop()).toBe(4);
        expect(queue.empty()).toBe(true);
    });
});
