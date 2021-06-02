const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('button[data-clear]');
const backspaceBtn = document.querySelector('button[data-backspace]');
let btns = document.querySelectorAll('.btn');
let val1 = [];
let val2 = [];
let operator = '';
let solution = '';

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
			return divide(val1, val2);
			break;
	}
};

const backspace = () => (screen.textContent = screen.textContent.slice(0, -1));

const clear = () => {
	num1Clicked = false;
	num2Clicked = false;
	operatorClicked = false;
	equalsClicked = false;
	screen.textContent = '';
	val1 = [];
	val2 = [];
	operator = '';
	solution = '';
};

let num1Clicked = false;
let num2Clicked = false;
let operatorClicked = false;
let equalsClicked = false;

btns.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (button.dataset.number) {
			num1Clicked = true;
			screen.textContent += e.target.textContent;
			console.log('1');
		}
		if (button.dataset.operator) {
			if (num1Clicked && !num2Clicked) {
				operatorClicked = true;
				operator = button.dataset.operator;
				val1.push(screen.textContent);
				val1 = Number(val1);
				console.log('2');
			}
		}
		if (button.dataset.number) {
			if (operatorClicked) {
				num2Clicked = true;
				num1Clicked = false;
				operatorClicked = false;
				screen.textContent = '';
				screen.textContent += e.target.textContent;
				console.log('3');
			}
		}
		if (button.dataset.operator) {
			if (num2Clicked) {
				num2Clicked = false;
				operatorClicked = true;
				val2.push(screen.textContent);
				val2 = Number(val2);
				solution = operate(val1, val2, operator);
				screen.textContent = solution;
				val1 = solution;
				val2 = [];
				operator = button.dataset.operator;
				console.log('4');
			}
		}
		if (button.dataset.equals) {
			if (num2Clicked) {
				num2Clicked = false;
				equalsClicked = true;
				operatorClicked = true;
				val2.push(screen.textContent);
				val2 = Number(val2);
				solution = operate(val1, val2, operator);
				screen.textContent = solution;
				val1 = solution;
				val2 = [];
				console.log('5');
			}
		}
		if (button.dataset.operator) {
			if (equalsClicked) {
				num2Clicked = false;
				equalsClicked = false;
				operatorClicked = true;
				val1 = solution;
				val2 = [];
				operator = button.dataset.operator;
				console.log('6');
			}
		}
	});
});

backspaceBtn.addEventListener('click', (e) => {
	backspace();
});

clearBtn.addEventListener('click', (e) => {
	clear();
});
