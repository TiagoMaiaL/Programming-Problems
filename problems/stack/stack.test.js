'use strict';

const { Stack, MaxStack, MinStack, MinMaxStack } = require('./stack');

describe('Stack', () => {
    test('It has a push operation in it', () => {
        const stack = new Stack();
        expect(stack.push('val')).toBeUndefined();
    });

    test('Pushing undefined throws an error', () => {
        const stack = new Stack();
        expect(() => stack.push(undefined)).toThrow(TypeError);
    });

    test('It has a pop operation in it', () => {
        const stack = new Stack();
        expect(stack.pop()).toBeUndefined();
    });

    test('Pop gives back the last pushed value', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.pop()).toBe(1);
    });

    test('Calling pop n times should give the first pushed value in the stack', () => {
        const stack = new Stack();
        stack.push(5);
        stack.push(9);
        stack.push(1001);

        stack.pop();
        stack.pop();

        expect(stack.pop()).toBe(5);
    });
});

describe('MaxStack', () => {
    test('It has a function to get the maximum element of the stack', () => {
        const maxStack = new MaxStack();
        expect(maxStack.max()).toBeUndefined();
    });

    test('It returns the single pushed value', () => {
        const maxStack = new MaxStack();
        maxStack.push(-12);

        expect(maxStack.max()).toBe(-12);
    });

    test('It returns the largest pushed value', () => {
        const maxStack = new MaxStack();
        
        for (let i = 0; i < 20; i++) {
            maxStack.push(i);
        }
        
        expect(maxStack.max()).toBe(19);
    });
});


