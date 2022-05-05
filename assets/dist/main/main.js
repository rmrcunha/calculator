import { Calculator } from "./result.js";
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-clear]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-number]');
const currentOperandTextElement = document.querySelector('[data-current-number]');
const square = document.querySelector('[data-square]');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});
console.log(square);
