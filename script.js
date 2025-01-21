console.log('Hello World');

let container = document.getElementById('form-container');

let display = document.getElementById('display');

let inputArr = [];

let displayValue = ''
let firstValue;
let secondValue;
let resultValue;

let add = document.querySelector('.addition');
let subtract = document.querySelector('.subtraction');
let multiply = document.querySelector('.multiplication');
let divide = document.querySelector('.division');

let operations = [add, subtract, multiply, divide];

for(i = 0; i < 10; i++) {
    inputArr.push(i);
}

for(i = 0; i < 10; i++) {
    let input = document.createElement('button');
    input.classList.add('input-button');
    input.textContent = inputArr[i];

    input.addEventListener('click', inputDisplay);

    container.appendChild(input);
    console.log(input);
}

function inputDisplay(e) {
    const value = e.target;
    displayValue += value.textContent;
    display.textContent = displayValue;
}

function inputSecondValue() {
        firstValue = parseInt(display.textContent, 10);
        console.log(firstValue);
        displayValue = ''
        display.textContent = displayValue;
}

function operate() {

    if(add.classList.contains('selected')) {
        secondValue = parseInt(display.textContent, 10);
        console.log(secondValue);
        resultValue = addition(firstValue, secondValue);
        displayValue = resultValue;
        display.textContent = displayValue;
        for(i = 0; i < operations.length; i++) {
            operations[i].classList.remove('selected');
        }
        return resultValue;
    }

    if(subtract.classList.contains('selected')) {
        secondValue = parseInt(display.textContent, 10);
        console.log(secondValue);
        resultValue = subtraction(firstValue, secondValue);
        displayValue = resultValue;
        display.textContent = displayValue;
        for(i = 0; i < operations.length; i++) {
            operations[i].classList.remove('selected');
        }
        return resultValue;
    }

    if(multiply.classList.contains('selected')) {
        secondValue = parseInt(display.textContent, 10);
        console.log(secondValue);
        resultValue = multiplication(firstValue, secondValue);
        displayValue = resultValue;
        display.textContent = displayValue;
        for(i = 0; i < operations.length; i++) {
            operations[i].classList.remove('selected');
        }
        return resultValue;
    }

    if(divide.classList.contains('selected')) {
        secondValue = parseInt(display.textContent, 10);
        console.log(secondValue);
        resultValue = division(firstValue, secondValue);
        displayValue = resultValue;
        display.textContent = displayValue;
        for(i = 0; i < operations.length; i++) {
            operations[i].classList.remove('selected');
        }
        return resultValue;
    }

}

operations.filter((e) => e.addEventListener('click', () => {
    e.classList.add('selected');
}))

function addition(a, b) {
    
    secondValue = parseInt(display.textContent, 10);
    display.textContent = '';
    return a + b;

}

function subtraction(a, b) {

    secondValue = parseInt(display.textContent, 10);
    display.textContent = '';
    return a - b;

}

function multiplication(a, b) {

    secondValue = parseInt(display.textContent, 10);
    display.textContent = '';
    return a * b;

}

function division(a, b) {

    secondValue = parseInt(display.textContent, 10);
    display.textContent = '';
    return a / b;

}

function clearValue() {
    displayValue = '';
    display.textContent = '';
    console.log('All inputs cleared');
    for(i = 0; i < operations.length; i++) {
        operations[i].classList.remove('selected');
    }
    return;
}