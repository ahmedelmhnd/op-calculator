let num1 = "";
let num2 = "";
let op = "";
let current;
let afterOp = false;
let buttons = document.querySelector('.keyboard');

const screen = document.querySelector(".screen");

buttons.addEventListener('click', (event) => 
{
    let target = event.target;

    if (!Number.isNaN(Number(target.id)))
    {
      if (!afterOp) 
      {
        num1 += target.id;
      }else 
      {
        num2 += target.id;
      }
    }else if (target.id == "+" || target.id == "-" || target.id == "*" || target.id == "/" ) 
    {
      op = target.id;
      afterOp = true;
    }else if (target.id == "=")
    {
      num1 = operate(Number(num1), Number(num2), op);
      num2 = "";
      op = "";
      afterOp = false;
    }else if (target.id == "ce")
    {
      num1 = "";
      num2 = "";
      op = "";
      afterOp = false;
    }
    
    screen.innerText = num1 + " " + op+ " " + num2;
});


const add = function(a, b) 
{
	return a + b;
};

const subtract = function(a, b) 
{
  return a - b;
};

const multiply = function(a, b)
{
    return a * b;
}

const divide = function(a, b)
{
    return a / b;
}

const operate = function(num1, num2, op)
{
  switch (op) {
    case "+":
      return num1 + num2;
    break;
    case "-":
      return num1 - num2;
    break;
    case "*":
      return num1 * num2;
    break;
    case "/":
      return num1 / num2;
    break;
    default:
      break;
  }
}

