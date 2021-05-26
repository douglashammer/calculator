const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('button[data-clear]');
const numBtns = document.querySelectorAll('button[data-number]');
const operatorBtns = document.querySelectorAll('button[data-operator]');
let btns = document.querySelectorAll('.btn');
let num1 = '';
let num2 = '';

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, num2, operator) => {
	switch (operator) {
		case '+':
			return add(num1, num2);
			break;
		case '-':
			return subtract(num1, num2);
			break;
		case '*':
			return multiply(num1, num2);
			break;
		case '/':
			return divide(num1, num2);
			break;
	}
};

let numberClicked = false;
let operatorClicked = false;

btns.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (button.dataset.number) {
			numberClicked = true;
			screen.textContent += e.target.textContent;
			num1 += button.dataset.number;
		}
		if (button.dataset.operator) {
			if (numberClicked) {
				operatorClicked = true;
			}
		}
		if (button.dataset.number) {
			if (operatorClicked) {
				console.log(operatorClicked);
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
	screen.textContent = '';
	num1 = '';
	num2 = '';
});
