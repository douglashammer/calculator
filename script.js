const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('button[data-clear]');
const numBtns = document.querySelectorAll('button[data-number]');
const operatorBtns = document.querySelectorAll('button[data-operator]');
let btns = document.querySelectorAll('.btn');
let val1 = [];
let val2 = [];
let solution = '';
let operator = '';

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

const clear = () => {
	num1Clicked = false;
	num2Clicked = false;
	operatorClicked = false;
	screen.textContent = '';
	val1 = [];
	val2 = [];
	operator = '';
	solution = '';
};

let num1Clicked = false;
let num2Clicked = false;
let operatorClicked = false;

btns.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (button.dataset.number) {
			num1Clicked = true;
			screen.textContent += e.target.textContent;
		}
		if (button.dataset.operator) {
			if (num1Clicked) {
				operator = button.dataset.operator;
				operatorClicked = true;
				val1.push(screen.textContent);
				val1 = Number(val1);
			}
		}
		if (button.dataset.number) {
			if (operatorClicked) {
				num2Clicked = true;
				num1Clicked = false;
				operatorClicked = false;
				screen.textContent = '';
				screen.textContent += e.target.textContent;
			}
		}
		if(button.dataset.equals) {
			if (num2Clicked) {
				val2.push(screen.textContent);
				val2 = Number(val2);
				screen.textContent = operate(val1, val2, operator);
			}
		}
	});
});

numBtns.forEach((button) => {
	button.addEventListener('click', (e) => {
		//screen.textContent += button.textContent;
	});
});

clearBtn.addEventListener('click', (e) => {
	clear();
});

let result = ["1", "2", "3", "4"]
console.log(typeof result[0]);