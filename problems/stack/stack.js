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
    /**
     * The values of the stack.
     */
    this.values = [];
}

// TODO: Check on how to inherit from another type.
// MaxStack.prototype = Stack.prototype;

MaxStack.prototype.push = function(value) {
    // Get a reference to the max and min values from the last pushed value:
    let { max, min } = this.values[this.values.length - 1] || { max: value, min: value };

    // Every time we push a value, we need to wrap it in an object, so we can also keep a record
    // of the largest and smallest values in the stack so far.
    Stack.prototype.push.call(this, {
        value: value,
        max: value > max ? value : max,
        min: value < min ? value : min
    });
}

MaxStack.prototype.pop = function() {
    if (this.values.length > 0) {
        return Stack.prototype.pop.apply(this).value;
    }
};

/**
 * Returns the largest element pushed into the stack.
 */
MaxStack.prototype.max = function() {
    if (this.values.length > 0) {
        return this.values[this.values.length - 1].max;
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

