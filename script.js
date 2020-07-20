let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
  calculatorScreen.value = number
};

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
};

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  })
});

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator;
  currentNumber = '0';
};

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  })
});

const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case '+':
      result = ((parseFloat(prevNumber) * 10) + (parseFloat(currentNumber) * 10)) / 10
      break;
    case '-':
      result = prevNumber - currentNumber
      break;
    case '*':
      result = prevNumber * currentNumber
      break;
    case '/':
      result = prevNumber / currentNumber
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = '';
}

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
})

const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
}

const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot;
}

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
})

const inputPercentage = () => {
  currentNumber = currentNumber / 100;
}

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', () => {
  inputPercentage();
  updateScreen(currentNumber);
})
