document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'clear') {
                currentInput = '0';
                operator = null;
                previousInput = null;
                updateDisplay(currentInput);
                return;
            }

            if (value === '=') {
                if (operator && previousInput !== null) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    operator = null;
                    previousInput = null;
                    updateDisplay(currentInput);
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (operator && previousInput !== null) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    updateDisplay(currentInput);
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '0';
                return;
            }

            if (currentInput === '0' && value !== '.') {
                currentInput = value;
            } else {
                currentInput += value;
            }

            updateDisplay(currentInput);
        });
    });

    function updateDisplay(value) {
        display.textContent = value;
    }

    function calculate(num1, num2, operator) {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            default:
                return '0';
        }
    }
});
