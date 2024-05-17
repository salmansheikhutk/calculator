// Create three variables
// let firstnumber = 0
// let secondnumber = 0
// let operator = 0

// Operate
function operate(firstnumber,secondnumber,operator){
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

console.log(operate(4,2,'+'))
console.log(operate(4,2,'-'))
console.log(operate(4,2,'*'))
console.log(operate(4,2,'/'))