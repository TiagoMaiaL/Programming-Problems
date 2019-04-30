'use strict';

/**
 * A linked list object.
 * @param {Array} elements - the elements to be in node.
 */
function SinglyLinkedList(elements) {
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

    /**
     * The head of the list.
     */
    this.head = elements.reduceRight((previous, current) => {
        return new Node(current, previous);
    }, null);
}

/**
 * Reduces the linked list to a single value by using callback.
 * @param {Function} callback - the function to be applied to the nodes.
 * @param {Any} initialValue - the initial value to be used in the reduction.
 */
SinglyLinkedList.prototype.reduce = function(callback, initialValue) {
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
 * @param {Node} next - the reference to the next node.
 */
function Node(value, next) {
    /**
     * The value contained in the node.
     */
    this.value = value !== undefined ? value : null;

    /**
     * The reference to the next node.
     */
    this.next = next || null;
}

module.exports = { SinglyLinkedList, Node };
