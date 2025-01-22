console.log('Hello World');

let container = document.getElementById('input-container');
let display = document.getElementById('display');

let displayValue = '';
let firstValue = null;
let currentOperation = null;
let isNewInput = false;

let add = document.querySelector('.addition');
let subtract = document.querySelector('.subtraction');
let multiply = document.querySelector('.multiplication');
let divide = document.querySelector('.division');
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');

add.addEventListener('click', () => handleOperation('add'));
subtract.addEventListener('click', () => handleOperation('subtract'));
multiply.addEventListener('click', () => handleOperation('multiply'));
divide.addEventListener('click', () => handleOperation('divide'));
equals.addEventListener('click', handleEquals)
clear.addEventListener('click', clearValue)

let operations = [add, subtract, multiply, divide];

operations.filter((e) => e.addEventListener('click', () => {
    e.classList.add('selected');
}))

for(let i = 9; i >= 0; i--) {
    let input = document.createElement('button');
    input.classList.add('input-button');
    input.textContent = i;

    if(i === 0) {
        input.classList.add('zero-button');
    }

    input.addEventListener('click', () => {
        if(isNewInput) {
            displayValue = '';
            isNewInput = false;
        }
        displayValue += i;
        display.textContent = displayValue;
    });

    container.appendChild(input);
}

function handleOperation(operation) {
    if(firstValue === null) {
        firstValue = parseFloat(displayValue);
    } else if (currentOperation) {
        firstValue = calculate(firstValue, parseFloat(displayValue), currentOperation);
    }

    currentOperation = operation;
    isNewInput = true;
    display.textContent = firstValue;
}

function handleEquals() {
    if(currentOperation && displayValue) {
        firstValue = calculate(firstValue, parseFloat(displayValue), currentOperation);
        display.textContent = firstValue;
        currentOperation = null;
        displayValue = '';
        isNewInput = true;
    }
}

function clearValue() {
    displayValue = '';
    currentOperation = null;
    firstValue = null;
    display.textContent = '';
}

function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b!== 0 ? a / b : `Oh yeah that's not gonna work now. Try something else`;
        default:
            return a;
    }
}