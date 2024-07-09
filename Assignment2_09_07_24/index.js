"use strict";
// 1. JavaScript Program to Calculate the Area of a Triangle

let base = +prompt("Enter the Base of the Tringle");
let height = +prompt("Enter the Height of the Tringle");
let Area = (base * height) / 2;
console.log(`The Area of the Tringle is ${Area}`);


// 2. Javascript Program to Convert Celsius to Fahrenheit

let celcius = +prompt("Enter the Temperature in Celcius");
let fahrenheit = (celcius * 9) / 5 + 32;
console.log(`The Temperature in Fahrenheit is ${fahrenheit}`);


// 3. JavaScript Program to Find the Factorial of a Number

let number = +prompt("Enter a Number");
let fact = 1;
if (number < 0) {
    console.log("Factorial for Negative Number is not Possible");
}
else if (number === 0) {
    console.log(`Factorial of ${number} is 1`);
}
else {
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    console.log(fact);
}


// 4. JavaScript Program to function as Calculator

let a = +prompt("Enter the First Number");
let operator = +prompt("Enter 1 for Addition, Enter 2 for Substraction, Enter 3 for Multiplication, Enter 4 for Division, Enter 5 for Modulo");
let b = +prompt("Enter the second number");
switch(operator) {
    case 1:
        console.log(`The Result is ${a+b}`);
        break;
    case 2:
        console.log(`The Result is ${a-b}`);
        break;
    case 3:
        console.log(`The Result is ${a*b}`);
        break;
    case 4:
        console.log(`The Result is ${a/b}`);
        break;
    case 5:
        console.log(`The Result is ${a%b}`);
        break;
    default:
        console.log(`Input is Invalid`);
}