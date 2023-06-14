// part 1

// Write a function that receives two arguments, start and end, and returns an array of numbers from start to end (inclusive).

function arrayNumbers(start, end) {
    var result = [];
    for (var i = start; i <= end; i = i + 1) {
        result.push(i);
    }
    return result;
}

console.log(arrayNumbers(5, 10)); // output: [ 5, 6, 7, 8, 9, 10 ]

// part 2

// Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by 7.

function arrayDivBy7(start, end) {
    var result = [];
    for (var i = start; i <= end; i = i + 1) {
        if (i % 7 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(arrayDivBy7(20, 60)); // output: [ 21, 28, 35, 42, 49, 56 ]

// part 3

// Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by both 3 and 5.

function arrayDivBy3And5(start, end) {
    var result = [];
    for (var i = start; i <= end; i = i + 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(arrayDivBy3And5(30, 90)); // output: [ 30, 45, 60, 75, 90 ]

// part 4

// Write a function that receives two positive arguments, start and end, and returns an array of positive numbers between start and end (inclusive) whose square is also within the same range (start to end).

function arraySquareRange(start, end) {
    var result = [];
    for (var i = start; i <= end; i = i + 1) {
        var square = i * i;
        if (square >= start && square <= end) {
            result.push(i);
        } else {
            break;
        }
    }
    return result;
}

console.log(arraySquareRange(9, 400)); // output: [9, 10, 11, 12, 13,14, 15, 16, 17, 18,19, 20]

// part 5

// Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously.

function arrayDivBy3And5NotBoth(start, end) {
    var result = [];
    for (var i = start; i <= end; i = i + 1) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            result.push(i);
        }
    }
    return result;
}

console.log(arrayDivBy3And5NotBoth(60, 88)); // output: [63, 65, 66, 69, 70,72, 78, 80, 81, 84,85, 87]
