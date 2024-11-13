function add(firstNum,secondNum){
    return firstNum + secondNum
}

function subtract(firstNum,secondNum){
    return firstNum - secondNum
}

function multiply(firstNum,secondNum){
    return firstNum * secondNum
}

function divide(firstNum,secondNum){
    return firstNum / secondNum
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

let firstNum;
let secondNum;
let operator;
