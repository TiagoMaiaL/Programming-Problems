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

function SinglyLinkedList() {

}

function DoublyLinkedList() {

}

/**
 * A single node of a linked list.
 */
function Node() {
    /**
     * The value contained in the node.
     */
    const value = null;

    /**
     * The reference to the previous node.
     */
    let previous = null;

    /**
     * The reference to the next node.
     */
    let next = null;
}

module.exports = { SinglyLinkedList, DoublyLinkedList, Node };
