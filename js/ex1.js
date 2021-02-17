let num1 = parseInt(prompt('Enter Number 1: '));
let num2 = parseInt(prompt('Enter Number 2: '));
let operation = (prompt('Enter a mathematical operation (+,-,*,/): '));

if(operation ==='+') {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
} else if(operation ==='-')
    console.log(`${num1} - ${num2} = ${num1 - num2}`);{
} else if(operation ==='*') {
    console.log(`${num1} * ${num2} = ${num1 * num2}`)
} else if(operation ==='/') {
    console.log(`${num1} / ${num2} = ${num1 / num2}`)};
