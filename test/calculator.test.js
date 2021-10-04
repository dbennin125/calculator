// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { addTwoNumbers, subtractTwoNumbers, divideTwoNumbers, multipleTwoNumbers } from '../operand-functions.js';

const test = QUnit.test;


test('it will add two numbers together with addTwoNumber function', (expect) => {
    
    const input1 = 6;
    const input2 = 4;

    const expected = 10;

    const actual = addTwoNumbers(input1, input2);
    expect.equal(actual, expected, 'adds 6 and 4 for 10');


});

test('it will subtract two numbers together with subtractTwoNumbers function', (expect) => {
    
    const input1 = 6;
    const input2 = 4;

    const expected = 2;

    const actual = subtractTwoNumbers(input1, input2);
    expect.equal(actual, expected, 'subtracts 6 and 4 for 2');


});

test('it will divide two numbers together with divide function', (expect) => {
    
    const input1 = 4;
    const input2 = 2;

    const expected = 2;

    const actual = divideTwoNumbers(input1, input2);
    expect.equal(actual, expected, 'divides 4 and 2 for 2');


});

test('it will multiply two numbers together with multiply function', (expect) => {
    
    const input1 = 2;
    const input2 = 5;

    const expected = 10;

    const actual = multipleTwoNumbers(input1, input2);
    expect.equal(actual, expected, 'multiplies 2 and 5 for 10');

});

