const display = document.querySelector('.screen');
const clearBtn = document.querySelector('button[data-clear]');
const btns = document.getElementById('btn-container');

let val1 = null;
let operator = null;
let displayValue = '0';
let operator1Clicked = false;
let numClicked = false;
let signClicked = false;

const updateDisplay = () => (display.value = displayValue);
updateDisplay();

const inputNumber = (number) => {
	numClicked = true;
	if (operator1Clicked) {
		displayValue = number;
		operator1Clicked = false;
	} else if (operator1Clicked && displayValue == '-0') {
		displayValue = `-${number}`;
		operator1Clicked = false;
	} else {
		if (displayValue == '0') {
			displayValue = number;
		} else if (displayValue == '-0') {
			displayValue = `-${number}`;
		} else {
			displayValue = displayValue + number;
		}
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
		const solution = operate(val1, input, operator);

		displayValue = String(solution);
		val1 = solution;
	}
	operator1Clicked = true;
	operator = nextOperator;
};

const changeSign = () => {
	if (!displayValue.includes('-')) {
		displayValue = `-${displayValue}`;
		signClicked = true;
	} else {
		displayValue = displayValue.replace('-', '');
		signClicked = false;
	}

	if (operator1Clicked && signClicked) {
		displayValue = '-0';
		operator1Clicked = false;
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
	signClicked = false;
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
		console.log('backspace', e.target.dataset.backspace);
	}
});

clearBtn.addEventListener('click', (e) => {
	clear();
});
