let displayValue = '0';

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue !== '0' && !isOperator(displayValue[displayValue.length - 1])) {
    displayValue += operator;
  } else if (displayValue !== '0' && isOperator(displayValue[displayValue.length - 1])) {
    displayValue = displayValue.slice(0, -1) + operator;
  }
  updateDisplay();
}

function deleteFromDisplay() {
  if (displayValue.length === 1) {
    displayValue = '0';
  } else {
    displayValue = displayValue.slice(0, -1);
  }
  updateDisplay();
}

function resetDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}
