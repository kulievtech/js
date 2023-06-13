// part 1

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

console.log(combineArrays(arr1, arr2)); // output: [ 1, 2, 3, 4, 5, 6 ]

// part 2

function reverseOrder(array) {
    array.reverse();
    return array;
}

var array = ["Messi", "Ronaldo", "Benzema"];

console.log(reverseOrder(array)); // output: [ 'Benzema', 'Ronaldo', 'Messi' ]

// part 3

function checkValue(array, value) {
    if (array.includes(value)) {
        return true;
    } else {
        return false;
    }
}

var array = [20, 30, 40, 50];
var value = 30;

console.log(checkValue(array, value)); // output: true

// part 4

function isArray(array) {
    if (Array.isArray(array)) {
        return true;
    } else {
        return false;
    }
}

var seats = [10, 11, 12, 13];

console.log(isArray(seats)); // output: true

// part 5

function arraySlice(array, num1, num2) {
    return array.slice(num1, num2);
}

var array = [51, 52, 53, 54, 55, 56, 57];
var num1 = 2;
var num2 = 5;

console.log(arraySlice(array, num1, num2)); // output: [ 53, 54, 55 ]

// part 6

function removeLast(array) {
    array.pop();
    return array;
}

var array = ["Tiger", "Monkey", "Lion"];

console.log(removeLast(array)); // output: [ 'Tiger', 'Monkey' ]

// part 7

function removeFirst(array) {
    array.shift();
    return array;
}

var array = ["Cherry", "Banana", "Kiwi"];

console.log(removeFirst(array)); // output: [ 'Banana', 'Kiwi' ]

// part 8

function addAtBeginning(array, value) {
    array.unshift(value);
    return array;
}

var array = ["Khabib", "Conor", "Diaz", "Leon"];
var value = "Kamaru";

console.log(addAtBeginning(array, value)); // output: [ 'Kamaru', 'Khabib', 'Conor', 'Diaz', 'Leon' ]

// part 9

function addAtEnd(array, value) {
    array.push(value);
    return array;
}

var array = [300, 400, 500, 600];
var value = 700;

console.log(addAtEnd(array, value)); // output: [ 300, 400, 500, 600, 700 ]
