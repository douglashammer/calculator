const screen = document.querySelector('.screen');
const signBtn = document.querySelector('button[data-sign]');
const backspaceBtn = document.querySelector('button[data-backspace]');
const clearBtn = document.querySelector('button[data-clear]');
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
			return add(+val1, +val2);
			break;
		case '-':
			return subtract(+val1, +val2);
			break;
		case '*':
			return multiply(+val1, +val2);
			break;
		case '/':
			if (val2 === 0) {
				return '8008135';
			} else {
				return divide(+val1, +val2);
			}
			break;
	}
};

const changeSign = () => {
	signClicked = true;
	if (screen.textContent.indexOf('-') === 0) {
		screen.textContent = screen.textContent.replace('-', '');
	} else if (screen.textContent.indexOf('-') === -1) {
		screen.textContent = `-${screen.textContent}`;
	}
};

const clear = () => {
	num1Clicked = false;
	num2Clicked = false;
	operatorClicked = false;
	equalsClicked = false;
	signClicked = false;
	backspaceClicked = false;
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
let backspaceClicked = false;
let signClicked = false;

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
				num1Clicked = false
				operator = button.dataset.operator;
				val1.push(screen.textContent);
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
				console.log(val1);
			}
		}
		if (button.dataset.operator) {
			if (num2Clicked) {
				num2Clicked = false;
				operatorClicked = true;

				val2.push(screen.textContent);
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
				console.log(solution)
			}
		}
	});
});

signBtn.addEventListener('click', (e) => {
	changeSign();
});

backspaceBtn.addEventListener('click', (e) => {
	backspaceClicked = true;
	backspace();
});

clearBtn.addEventListener('click', (e) => {
	clear();
});
let num4 = '4';
console.log(typeof +num4)
