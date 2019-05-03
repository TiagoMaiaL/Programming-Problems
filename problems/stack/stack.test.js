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
    test('It has a function to pop values from it', () => {
        const maxStack = new MaxStack();
        maxStack.push(12);
        maxStack.push(1500);

        expect(maxStack.pop()).toBe(1500);
    });

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

    test('It returns the largest pushed value currently in the stack', () => {
        const maxStack = new MaxStack();
        maxStack.push(12);
        maxStack.push(1000);
        
        maxStack.pop();
        
        expect(maxStack.max()).toBe(12);
    });

    test('It returns the largest pushed value currently in a stack with n elements', () => {
        const maxStack = new MaxStack();
        maxStack.push(12);
        maxStack.push(1000);
        maxStack.push(200);
        maxStack.push(1500);
        maxStack.push(1300);
        
        maxStack.pop(); // 1300, max: 1500
        maxStack.pop(); // 1500, max: 1000
        
        expect(maxStack.max()).toBe(1000);
    });
});
