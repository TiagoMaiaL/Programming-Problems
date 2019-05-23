'use strict';

const { SinglyLinkedList } = require('../linked-list/linked-list');

/**
 * A queue data structure.
 */
class Queue {
    constructor() {
        this.list = new SinglyLinkedList([]);

        Object.defineProperty(this, 'count', {
            get() {
                return this.list.count;
            }
        });
    }

    /**
     * Given a value, inserts it into the end of the queue.
     */
    enqueue(value) {
        this.list.push(value);
    }

    /**
     * Gets the next element in the queue.
     * @returns the immediate next element in the queue.
     */
    dequeue() {
        return this.list.shift();
    }
}

module.exports = { Queue };
