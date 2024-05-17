// Create three variables
let firstnumber = 0
let secondnumber = 0
let operator = 0
let display_value = 0

// Display Values
function display(firstnumber,operator,secondnumber){
    display_value =  operate(firstnumber,operator,secondnumber)
    return display_value
}

// Operate
function operate(firstnumber,operator,secondnumber){
    if (operator == '+') {
        return add(firstnumber,secondnumber)
    } else if (operator == '-') {
        return subtract(firstnumber,secondnumber)
    } else if (operator == '*') {
        return multiply(firstnumber,secondnumber)
    } else if (operator == '/') {
        return divide(firstnumber,secondnumber)
    }
}

// Add
function add(a,b) {
    return a + b
}

// Subtract
function subtract(a,b) {
    return a - b
}

// Multiply
function multiply(a,b){
    return a * b
}

// Divide
function divide(a,b){
    return a/b
}

console.log(display(1,"+",2)) //check if calc works

// Hover over and change color

function mouse() {
    const btns = document.querySelectorAll(".hov");
    btns.forEach((btn) => {
        btn.addEventListener("mouseover", changecolor)
        btn.addEventListener("mouseout", resetcolor)
    })
}

// function for mouseover color change
function changecolor () {
    this.style.backgroundColor = "lightgrey"
    this.style.color = "black"
}

// reset color
function resetcolor () {
    this.style.backgroundColor = "";
    this.style.color = ""
}

mouse();
// store 4 clicks: first number, operator, second number, =
// Store first number clicked

// Store operator clicked

// Store second number clicked

// Store = sign clicked, which shows result in display