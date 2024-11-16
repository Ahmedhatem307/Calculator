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

let display = document.getElementById("display");
display.textContent = "0";
let firstNum = "";
let secondNum = "";
let operator;
let flag = false;

function addEvent1(btn){
    display.textContent = "";
    for (let i = 0, len = btn.length; i < len; i++) {
        btn[i].addEventListener("click", () =>  {
            display.textContent += btn[i].value;
            
        });
    }
    
}

function addEvent2(btn){
    
    for (let i = 0, len = btn.length; i < len; i++) {
        btn[i].addEventListener("click", () =>  {
            btn[i].style.backgroundColor = "red";
            firstNum = display.textContent;
            secondClick(firstNum,btn[i].value);
            display.textContent = "";
        });
    }
    
}
function secondClick(first,sign){

    console.log(first);
    console.log(sign);
}

let events1 = document.querySelectorAll(".operand");
let events2 = document.querySelectorAll(".operator");

addEvent1(events1);
addEvent2(events2);






