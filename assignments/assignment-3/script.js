// Part 1

var num1 = 5;
var num2 = 10;

var sum = num1 + num2;
console.log(sum);

var difference = num1 - num2;
console.log(difference);

var multiply = num1 * num2;
console.log(multiply);

let divide = num1 / num2;
console.log(divide);

// Part 2

var fahrenheit = 100;
var celsius = (fahrenheit - 32) * (5 / 9);
console.log(celsius);

var celsius = 38;
var fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

// Part 3

var principal = 500;
var rate = 0.095;
var time = 6;

var interest = (principal * rate * time) / 100;
console.log(interest);

// Part 4

var a = 30;
var b = 100;

console.log("Before swap:");
console.log("a =", a);
console.log("b =", b);

// Swapping the values without a third variable
a = a + b;
b = a - b;
a = a - b;

console.log("After swap:");
console.log("a =", a);
console.log("b =", b);

// Part 5

var radius = 5;

var circleArea = (3.14 * radius) ** 2;
console.log(circleArea);

var length = 200;
var width = 500;

var perOfRectangle = 2 * (length + width);
console.log(perOfRectangle);
