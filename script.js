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
let el;

let display = document.getElementById("display");

function addEvent(btn){
    for (let i = 0, len = btn.length; i < len; i++) {
        btn[i].addEventListener("click", () =>  display.textContent = btn[i].value);
    }
}
let firstNum = document.querySelectorAll("button");
addEvent(firstNum)

console.log(el);

console.log("hello")
let secondNum;
let operator;



