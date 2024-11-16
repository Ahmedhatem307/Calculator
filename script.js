function add(firstNum,secondNum){
    return Number(firstNum) + Number(secondNum);
}

function subtract(firstNum,secondNum){
    return Number(firstNum) - Number(secondNum);
}

function multiply(firstNum,secondNum){
    return Number(firstNum) * Number(secondNum);
}

function divide(firstNum,secondNum){
    return Number(firstNum) / Number(secondNum);
}

function operate(first,second,operator){
    if(operator == "+")
        return add(first,second)
    if(operator == "-")
        return subtract(first,second)
    if(operator == "*")
        return multiply(first,second)
    if(operator == "/")
        return divide(first,second)
}

let buttons = document.querySelectorAll("button");
let displayVal = "0";
let firstOperand = true;
let firstNum = "0";
let secondNum = "0";
let operator = "";
let operatorsCounter = 0;

function updateDisplay(){
    let display = document.getElementById("display");
    display.textContent = displayVal;
}
function clear(){
    displayVal = "0";
    firstOperand = true;
    firstNum = "0";
    secondNum = "0";
    operator = ""
    operatorsCounter = 0;
}

updateDisplay()

function clicks(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click",function(){
            if(buttons[i].classList.contains("operand")){
                inputOperand(buttons[i].value);
                updateDisplay();
            }
            else if(buttons[i].classList.contains("operator")){
                inputOperator(buttons[i]);
                updateDisplay();
            }
            else if(buttons[i].classList.contains("operation")){
                secondNum = displayVal;
                displayVal = operate(firstNum,secondNum,operator);
                updateDisplay();
            }
            else if(buttons[i].classList.contains("clear")){
                clear();
                updateDisplay();
            }
        });
    }
}

function inputOperand(btn){
    if(firstOperand){
         displayVal = btn;
        firstOperand = false;
    }
    else {
         displayVal += btn;
    }
}

function inputOperator(btn){
    if(operatorsCounter == 0){
        firstNum = display.textContent;
        firstOperand = true;
        operator = btn.value;
        operatorsCounter++;
    }
    else{
        secondNum = displayVal;
        firstNum = operate(firstNum,secondNum,operator);
        displayVal = firstNum;
        firstOperand = true;
        operator = btn.value;
        operatorsCounter++;
    }
    
    
}

clicks();

