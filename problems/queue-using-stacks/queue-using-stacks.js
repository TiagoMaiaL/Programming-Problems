'use strict';

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

    /**
     * Returns whether the stack is empty.
     * @return {boolean}
     */
    empty() {
        return this.elements.length === 0;
    }
}

/**
 * A queue data structure.
 */
class MyQueue {
    constructor() {
        this.enqueueStack = new Stack();
        this.dequeueStack = new Stack();
    }

    /**
     * Reverses the enqueue stack into the dequeue one.
     */
    _reverseStacks() {
        if (!this.enqueueStack.empty()) {
            while (!this.enqueueStack.empty()) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        } else {
            while (!this.dequeueStack.empty()) {
                this.enqueueStack.push(this.dequeueStack.pop());
            }
        }
    }

    /**
     * Push element x to the back of queue. 
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.enqueueStack.push(x);
    }

    /**
     * Removes the element from in front of queue and returns that element.
     * @return {number}
     */
    pop() {
        if (this.dequeueStack.empty()) {
            this._reverseStacks();
        }

        return this.dequeueStack.pop();
    }

    /**
     * Get the front element.
     * @return {number}
     */
    peek() {
        if (this.dequeueStack.empty()) {
            this._reverseStacks();
        }


        return this.dequeueStack.peek();
    }

    /**
     * Returns whether the queue is empty.
     * @return {boolean}
     */
    empty() {
        return this.enqueueStack.empty() && this.dequeueStack.empty();
    }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

module.exports = { MyQueue };
