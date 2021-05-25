const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('button[data-clear]');
const numBtns = document.querySelectorAll('button[data-number]');
const operatorBtns = document.querySelectorAll('button[data-operator]');
let btns = document.querySelectorAll('.btn');
let num1 = 0;
let num2 = 0;

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, num2, operator) => {
  switch(operator) {
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
  };
}

btns.forEach(button => {
  button.addEventListener('click', e => {
    if(button.dataset.operator) {
      console.log(button)
    }
  });
});

numBtns.forEach(button => {
  button.addEventListener('click', e => {
    screen.textContent += button.textContent;
  });
});

clearBtn.addEventListener('click', e => {
  screen.textContent = '';
});

