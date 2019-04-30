'use strict';

/**
 * A linked list object.
 * @param {Array} elements - the elements to be in node.
 */
function LinkedList(elements) {
    if (elements === undefined || elements === null) {
        throw new TypeError('The elements must be valid.');
    }

    // Make sure we have an array of elements.
    if (!Array.isArray(elements)) {
        elements = Array.from(elements);
    }

    /**
     * The number of elements in the linked list.
     */
    this.count = elements.length;

    const headValue = elements.shift();
    /**
     * The head of the list.
     */
    this.head = headValue !== undefined ? new Node(headValue) : null

    /**
     * The tail of a list.
     */
    this.tail = elements.length > 0 ? elements.reduce((previous, currentValue) => {
        const node = new Node(currentValue, previous);
        previous.next = node;

        return node;
    }, this.head) : null;
}

/**
 * Reduces the linked list to a single value by using callback.
 * @param {Function} callback - the function to be applied to the nodes.
 * @param {Any} initialValue - the initial value to be used in the reduction.
 */
LinkedList.prototype.reduce = function(callback, initialValue) {
    if (this.count <= 1) {
        return this.head.value;
    }

    // Declare the reducer to apply the callback with to previous and current nodes, accumulating the result.
    const reducer = (accumulator, node) => {
        accumulator = callback(accumulator, node.value)

        // Reduce the remaining list.
        if (node.next !== null) {
            accumulator = reducer(accumulator, node.next);
        }

        return accumulator;
    }

    return reducer(initialValue || this.head.value, initialValue != null ? this.head : this.head.next);
}

/**
 * A single node of a linked list.
 * @param {Any} value - the value contained in Node when new() is called.
 * @param {Node} previous - the reference to the previous node.
 * @param {Node} next - the reference to the next node.
 */
function Node(value, previous, next) {
    /**
     * The value contained in the node.
     */
    this.value = value !== undefined ? value : null;

    /**
     * The reference to the previous node.
     */
    this.previous = previous || null;

    /**
     * The reference to the next node.
     */
    this.next = next || null;
}

module.exports = { LinkedList, Node };
