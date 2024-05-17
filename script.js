// Create three variables
let firstnumber = ""
let secondnumber = ""
let operator = ""
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
    } else if (operator == 'x') {
        return multiply(firstnumber,secondnumber)
    } else if (operator == '÷') {
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
function fullmath() {
    const btns = document.querySelectorAll(".num");
    const ops = document.querySelectorAll(".operator")
    const equal = document.querySelectorAll(".equal")
    const clear = document.querySelector(".grey")

    btns.forEach((btn) => {
        btn.addEventListener("click", setNumber)})

    // Store operator clicked
    ops.forEach((op) => {
        op.addEventListener("click", addop)
    })

    // Store = sign clicked, which shows result in display
    equal.forEach((equal_a) => {
        equal_a.addEventListener("click", equalfunction)})

    clear.addEventListener("click", () => {
        firstnumber = ""
        secondnumber = ""
        operator = ""
        outputelement.innerText = 0
    })
}

let outputelement = document.getElementsByClassName("output")[0]

function setNumber () {
    if (operator == "") {
        if (firstnumber.length < 7) {
        firstnumber = firstnumber + this.innerHTML
        console.log("First:", firstnumber)
        outputelement.innerText = firstnumber
        }
    } else {
        if (secondnumber.length < 7) {
        secondnumber = secondnumber + this.innerHTML 
        console.log("Second:", secondnumber)
        outputelement.innerText = secondnumber
        }
    }
}


function addop () {
    if (firstnumber == "") {
        return
    } else if (firstnumber != "" && operator == "") {
        operator = this.innerHTML
        console.log(operator)
    } else if (operator != "" && secondnumber != ""){
        container = secondnumber
        equalfunction();
        operator = this.innerHTML
        console.log(operator)
        firstnumber = container
        console.log(firstnumber)
    }
}


function equalfunction (){
    equal_val = display(parseInt(firstnumber,10),operator,parseInt(secondnumber,10))
    console.log(equal_val)
    firstnumber = ""
    secondnumber = ""
    operator = ""
    if (equal_val % 1 == 0) {
        outputelement.innerText = equal_val
    } else {
    outputelement.innerText = (equal_val).toFixed(6)
    }
}

fullmath();

