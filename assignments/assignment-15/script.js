// part 1

// Write a function that takes two arguments, start and end, and returns the count of numbers from start to end (inclusive).

function countNumbers(start, end) {
    return end - start + 1;
}

console.log(countNumbers(10, 45)); // output: 36

// part 2

// Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by 7.

function numbersDivBy7(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i = i + 1) {
        if (i % 7 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(numbersDivBy7(20, 70)); // output: 8

// part 3

// Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by both 3 and 5 at the same time.

function numbersDivByThreeAndFour(start, end) {
    var counter = 0;
    for (i = start; i <= end; i = i + 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(numbersDivByThreeAndFour(100, 500)); // output: 27

// part 4

// Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) for which the square is also within the same range (start to end).

function squareCount(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i = i + 1) {
        var square = i * i;
        if (square >= start && square <= end) {
            counter = counter + 1;
        } else {
            break;
        }
    }
    return counter;
}

console.log(squareCount(1, 10)); // output: 3

// part 5

// Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously.

function numbersDivByThreeAndFive(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i = i + 1) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(numbersDivByThreeAndFive(27, 40)); // output: 6
