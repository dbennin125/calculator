import { addTwoNumbers, subtractTwoNumbers, multipleTwoNumbers, divideTwoNumbers } from './operand-functions.js';

// import functions and grab DOM elements
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
const div = document.querySelector('#select');
const resultSpan = document.querySelector('span');


const operands = ['+', '-', '/', '*'];

const select = document.createElement('select');
operands.map(single => {
    let option = document.createElement('option');
    option.value = single;
    option.textContent = single;
    select.appendChild(option);
});

div.appendChild(select);

const getValue = input => +input.value;

button.addEventListener('click', (event) => {
    event.preventDefault();

    const input1 = getValue(inputs[0]);
    const input2 = getValue(inputs[1]);
    
    switch (select.value) {
        case '+': resultSpan.textContent = addTwoNumbers(input1, input2);
            break;
        case '-': resultSpan.textContent = subtractTwoNumbers(input1, input2);
            break;
        case '/': resultSpan.textContent = divideTwoNumbers(input1, input2);
            break;
        case '*': resultSpan.textContent = multipleTwoNumbers(input1, input2);
            break;
        default: resultSpan.textContent = 'error';
    }
});
