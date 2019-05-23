'use strict';

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

    /**
     * The tail of the list.
     */
    Object.defineProperty(this, 'tail', {
        get() {
            const getTail = node => node.next === null ? node : getTail(node.next);
            this._tail = this._tail || (this.head !== null ? getTail(this.head) : null);

            return this._tail;
        }
    });
}

/**
 * Given a value, adds it to the end of the list.
 * @param {Any} value - the value to be push into the list.
 */
SinglyLinkedList.prototype.push = function(value) {
    const newTail = new Node(value);
    const oldTail = this.tail;

    if (this.head === null) {
        this.head = newTail;
    }

    if (oldTail !== null) {
        oldTail.next = newTail;
    }
    
    this._tail = newTail;
    this.count += 1;
}

/**
 * Removes the last element of the list.
 * @returns the removed node's value.
 */
SinglyLinkedList.prototype.pop = function() {
    // The new tail is the element before the current tail.
    const getNewTail = (node) => {
        if (node.next === this.tail) {
            // We have a new tail.
            return node;
        } else if (node.next === null) {
            // The current node is the head and tail at the same time.
            return null;
        } else {
            // Proceed on finding the next tail.
            getNewTail(node.next);
        }
    };

    // Keep the last tail value.
    const lastValue = this.tail.value;

    this._tail = getNewTail(this.head);
    if (this._tail !== null) {
        this._tail.next = null;
    }

    if (this.count === 1) {
        this.head = null;
    }

    this.count -= 1;

    return lastValue;
}

/**
 * Given a value, add it to the beginning of the list, making it the head.
 */
SinglyLinkedList.prototype.unshift = function(value) {
    let newHead = new Node(value, this.head);
    this.head = newHead;
    this.count += 1;
}

/**
 * Removes the first element of the list.
 * @returns {Any} the value of the node being removed.
 */
SinglyLinkedList.prototype.shift = function() {
    const value = this.head.value;
    this.head = this.head.next;
    this.count -= 1;

    return value;
}

/**
 * Given a value, searches the list and returns its index, or -1 if it's not found.
 * @returns {Number} the index of the value in the list.
 */
SinglyLinkedList.prototype.indexOf = function(value) {
    let index = -1;
    let lookingIndex = 0;
    let node = this.head || null;

    while (node !== null) {
        if (node.value === value) {
            index = lookingIndex;
            break;
        } else {
            lookingIndex++;
            node = node.next
        }
    }

    return index;
}

/**
 * Reduces the linked list to a single value by using callback.
 * @param {Function} callback - the function to be applied to the nodes.
 * @param {Any} initialValue - the initial value to be used in the reduction.
 */
SinglyLinkedList.prototype.reduce = function(callback, initialValue) {
    if (this.count < 1) {
        return initialValue;
    }

    // Declare the reducer to apply the callback with to previous and current nodes, accumulating the result.
    const reducer = (accumulator, node) => {
        if (node === null) {
            return accumulator;
        }

        const { value, next } = node;

        // Reduce the remaining list.
        return reducer(callback(accumulator, value), next);
    }

    return reducer(initialValue || this.head.value, initialValue != null ? this.head : this.head.next);
}

/**
 * When called, creates a copy of the linked list and converts it into an array.
 * @returns {Array} the converted linked list into an array.
 */
SinglyLinkedList.prototype.getArrayFromList = function() {
    return this.reduce((array, value) => {
        array.push(value);
        return array;
    }, []);
}

/**
 * Sorts the singly linked list using the insertion sort algorithm.
 * @returns {SinglyLinkedList} the sorted linked list.
 */
SinglyLinkedList.prototype.insertionSort = function() {
     // The head is going to be the first sorted element in the list.
    let sortedNodesHead = Object.assign({}, this.head);
    sortedNodesHead.next = null;

    let currentNode = this.head.next;
    if (currentNode !== null) {
        do {
            // Begin traversing and comparing the sorted nodes:
            // Begin at the first sorted node:
            let sortedNode = sortedNodesHead;
            let lastCompared = null;
            do {
                // Check if it's equals or greater than the current node:
                if (currentNode.value <= sortedNode.value) {
                    // If so, we add it before the sorted node being compared.
                    const newSortedNode = Object.assign({}, currentNode);
                    newSortedNode.next = sortedNode;

                    // If the sorted node is the first one, simply set the new head.
                    if (lastCompared === null) {
                        sortedNodesHead = newSortedNode;
                    } else {
                        // If it's not the first sorted node and there's a last compared one, use it as the previous of the current one.
                        lastCompared.next = newSortedNode;
                    }

                    break;
                }

                // If it's the last node, and the current node isn't smaller than the current sorted one, append it:
                if (sortedNode.next === null) {
                    const greatest = Object.assign({}, currentNode);
                    greatest.next = null;

                    sortedNode.next = greatest;

                    break;
                }
                
                lastCompared = sortedNode;
                sortedNode = sortedNode.next;
            } while(sortedNode !== null);

            // Continue to the next one.
            currentNode = currentNode.next;
        } while (currentNode !== null);
    }

    const sortedList = new SinglyLinkedList([]);
    sortedList.head = sortedNodesHead;
    sortedList.count = this.count;

    return sortedList;
}

/**
 * Reverses the singly linked list.
 * @returns {SinglyLinkedList} the reversed linked list.
 */
SinglyLinkedList.prototype.reversed = function() {
    const reversed = new SinglyLinkedList([]);

    let node = Object.assign(new Node(), this.head);
    let lastTraversedNode = null;

    while(node !== null) {
        // Save the next node in a constant.
        const nextTempNode = node.next ? Object.assign(new Node(), node.next) : null;

        // Set the next node of the current to be the last seen one 
        // (this inverts the order, by chaning the direction). 
        node.next = lastTraversedNode;
        lastTraversedNode = node;

        // Set it as the new one.
        node = nextTempNode;
    }

    reversed.count = this.count;
    reversed.head = lastTraversedNode;

    return reversed;
}

/**
 * Given a value, removes all nodes that contain it from the linked list.
 * @param {Any} value - the value to be checked and removed from the linked list.
 */
SinglyLinkedList.prototype.removeElements = function(value) {
    // Get the head of the list.
    let node = this.head;
    let last = null;

    // Start traversing the nodes.
    while(node !== null) {
        // If the node being traversed has the value to remove:
        if (node.value === value) {
            if (node === this.head) {
                // Simply remove the head.
                this.head = node.next;
            } else {
                // Remove this node by setting the previous.next to be the node to remove.next.
                last.next = node.next;
            }
        } else {
            last = node;
        }

        if (node !== null) {
            node = node.next;
        }
    }
}

module.exports = { SinglyLinkedList, Node };
