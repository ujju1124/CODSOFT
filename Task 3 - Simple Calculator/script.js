let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (value === '=') {
        calculate();
    } else {
        currentInput += value;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '0';
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}