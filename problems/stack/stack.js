'use strict';

/**
 * A stack object.
 */
class Stack {

    constructor() {
        /**
         * The values of the stack.
         */
        this.values = [];
    }

    /**
     * Given a value, pushes it into the stack.
     * @param {Any} value
     */
    push(value) {
        if (value === undefined) {
            throw new TypeError('Value must be valid.');
        }
    
        this.values.push(value);
    }

    /**
     * Returns the last valued pushed into the stack.
     * @returns {Any} the last value popped into the stack.
     */
    pop() {
        return this.values.pop();
    }
}

/**
 * A stack that supports the max operation in O(1) time.
 */
class MaxStack extends Stack {
    
    push(value) {
        // Get a reference to the max and min values from the last pushed value:
        let { max } = this.values[this.values.length - 1] || { max: value, min: value };

        // Every time we push a value, we need to wrap it in an object, so we can also keep a record
        // of the largest and smallest values in the stack so far.
        super.push({
            value: value,
            max: value > max ? value : max,
        });
    }

    pop() {
        if (this.values.length > 0) {
            return Stack.prototype.pop.apply(this).value;
        }
    }

    /**
     * Returns the largest element pushed into the stack.
     */
    max() {
        if (this.values.length > 0) {
            return this.values[this.values.length - 1].max;
        }
    }
}

/**
 * A stack that supports the Min and Max operations in O(1) time.
 */
class MinMaxStack extends MaxStack {

    push(value) {
        let min;
    
        // Get the last pushed value.
        if (this.values.length > 0) {
            const last = this.values[this.values.length - 1];
            min = value < last.min ? value : last.min;
        } else {
            min = value;
        }
        
        // Reuse the push from the MaxStack.
        super.push(value);
    
        // Get the new pushed one and add the min to it.
        this.values[this.values.length - 1].min = min;
    }

    /**
     * Returns the smallest element pushed into the stack.
     */
    min() {
        if (this.values.length > 0) {
            return this.values[this.values.length - 1].min;
        }
    }
}

module.exports = { Stack, MaxStack, MinMaxStack };
