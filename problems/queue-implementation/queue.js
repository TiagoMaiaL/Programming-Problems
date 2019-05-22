'use strict';

/**
 * A queue data structure.
 */
class Queue {
    constructor() {
        this.elements = [];
    }

    /**
     * Given a value, inserts it into the end of the queue.
     */
    enqueue(value) {
        this.elements.push(value);
    }

    /**
     * Gets the next element in the queue.
     * @returns the immediate next element in the queue.
     */
    dequeue() {
        // This takes O(n), this can be done in O(1).
        // TODO: How?
        return this.elements.shift();
    }
}

module.exports = { Queue };
