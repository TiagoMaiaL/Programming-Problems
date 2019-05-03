'use strict';

/**
 * A stack object.
 */
function Stack() {
    /**
     * The values of the stack.
     */
    this.values = [];
}

/**
 * Given a value, pushes it into the stack.
 * @param {Any} value
 */
Stack.prototype.push = function(value) {
    if (value === undefined) {
        throw new TypeError('Value must be valid.');
    }

    this.values.push(value);
}

/**
 * Returns the last valued pushed into the stack.
 * @returns {Any} the last value popped into the stack.
 */
Stack.prototype.pop = function() {
    return this.values.pop();
}

/**
 * A stack that supports the max operation in O(1) time.
 */
function MaxStack() {

    this.values = [];

    /**
     * The largest value push into the stack so far.
     */
    this.largest = null;
}

// TODO: Check on how to inherit from another type.
// MaxStack.prototype = Stack.prototype;

MaxStack.prototype.push = function(value) {
    if (this.largest === null || value > this.largest) {
        this.largest = value
    }

    Stack.prototype.push.call(this, value);
}

/**
 * Returns the largest element pushed into the stack.
 */
MaxStack.prototype.max = function() {
    if (this.largest !== undefined && this.largest !== null) {
        return this.largest;
    }
}

/**
 * A stack that supports the Min operation in O(1) time.
 */
function MinStack() {

}

/**
 * A stack that supports the Min and Max operations in O(1) time.
 */
function MinMaxStack() {

}

module.exports = { Stack, MaxStack, MinStack, MinMaxStack };

