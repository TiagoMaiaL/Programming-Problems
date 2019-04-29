'use strict';

/**
 * A linked list object.
 */
function LinkedList() {
    /**
     * The number of elements in the linked list.
     */
    this.count = 0;

    /**
     * The head of the list.
     */
    let head = null;

    /**
     * The tail of a list.
     */
    let tail = null;
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
    this.value = value || null;

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
