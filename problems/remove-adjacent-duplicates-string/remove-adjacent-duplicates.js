'use strict';

/**
 * A Stack object.
 */
class Stack {
    constructor() {
        this.elements = [];
    }

    /**
     * Push element x to the top of the stack.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.elements.push(x);
    }

    /**
     * Removes the element from the top of the stack and returns that element.
     * @return {number}
     */
    pop() {
        return this.elements.pop();
    }

    /**
     * Get the top element.
     * @return {number}
     */
    peek() {
        return this.elements[this.elements.length - 1];
    }
}

/**
 * Given a string s, repeatedly removes adjacent duplicates until all of them are removed.
 * @param {string} s - the string to be treated.
 * @return {string} the string without any adjacent duplicates.
 */
const removeDuplicates = s => {
    const charsStack = new Stack();

    for (char of s) {
        if (charsStack.peek() === char) {
            charsStack.pop();
            continue;
        } else {
            charsStack.push(char);
        }
    }

    return charsStack.elements.join('');
};

module.exports = { removeDuplicates };
