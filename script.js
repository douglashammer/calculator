const display = document.querySelector('.screen');
const clearBtn = document.querySelector('button[data-clear]');
const btns = document.getElementById('btn-container');

let val1 = null;
let operator = null;
let solution = null;
let displayValue = '0';
let operator1Clicked = false;
let numClicked = false;
let signActive = false;
let backspaceClicked = false;

const updateDisplay = () => (display.value = displayValue);
updateDisplay();

const inputNumber = (number) => {
	numClicked = true;
	if (operator1Clicked) {
		displayValue = number;
		operator1Clicked = false;
	} else if (displayValue == '-0') {
		displayValue = `-${number}`;
	} else if (displayValue == '0') {
		displayValue = number;
	} else {
		displayValue = displayValue + number;
	}
};

const inputDecimal = () => {
	if (!displayValue.includes('.')) displayValue += '.';
};

const checkOperator = (nextOperator) => {
	const input = parseFloat(displayValue);
	if (operator && operator1Clicked) {
		operator = nextOperator;
		return;
	}

	if (val1 == null && !isNaN(input)) {
		val1 = input;
	} else if (operator) {
		solution = operate(val1, input, operator);
		displayValue = String(solution);
		val1 = solution;
	}

	operator1Clicked = true;
	operator = nextOperator;
};

const changeSign = () => {
	signActive = true;
	if (!displayValue.includes('-')) {
		signActive = true;
		displayValue = `-${displayValue}`;
	} else if (displayValue.includes('-')) {
		signActive = false;
		displayValue = displayValue.replace('-', '');
	}

	if (solution && signActive) {
		solution = solution *= -1;
		val1 = solution;
	} else if (solution && !signActive) {
		solution = Math.abs(solution);
		val1 = solution;
	}
};

const backspace = () => {
	backspaceClicked = true;
	if (displayValue !== '0') {
		displayValue = displayValue.slice(0, -1);
	}
	if (displayValue == '' || displayValue == '-') {
		displayValue = '0';
	}

	if (solution && backspaceClicked) {
		solution = String(solution);
		solution = solution.slice(0, -1);
		solution = Number(solution);
		val1 = solution;
	}
};

const clear = () => {
	display.value = '0';
	displayValue = '0';
	val1 = null;
	input = null;
	operator = null;
	solution = null;
	operator1Clicked = false;
	numClicked = false;
	signActive = false;
	backspaceClicked = false;
};

const add = (val1, val2) => val1 + val2;
const subtract = (val1, val2) => val1 - val2;
const multiply = (val1, val2) => val1 * val2;
const divide = (val1, val2) => val1 / val2;

const operate = (val1, val2, operator) => {
	switch (operator) {
		case '+':
			return add(val1, val2);
			break;
		case '-':
			return subtract(val1, val2);
			break;
		case '*':
			return multiply(val1, val2);
			break;
		case '/':
			if (val2 === 0) {
				return '8008135';
			} else {
				return divide(val1, val2);
			}
			break;
		default:
			return val2;
	}
};

btns.addEventListener('click', (e) => {
	if (e.target.dataset.number) {
		inputNumber(e.target.dataset.number);
		updateDisplay();
	}
	if (e.target.dataset.operator) {
		checkOperator(e.target.dataset.operator);
		updateDisplay();
	}
	if (e.target.dataset.decimal) {
		inputDecimal();
		updateDisplay();
	}
	if (e.target.dataset.sign) {
		changeSign();
		updateDisplay();
	}
	if (e.target.dataset.backspace) {
		backspace();
		updateDisplay();
	}
});

clearBtn.addEventListener('click', (e) => {
	clear();
});
