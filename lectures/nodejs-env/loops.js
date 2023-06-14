// write a function that takes two arguments, start and end, and returns the count of numbers between start and end that are divisible by 4 and 14.

function fourAndFourteen(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i = i + 1) {
        if (i % 4 === 0 && i % 14 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(fourAndFourteen(1, 1000));

// write a function that takes two arguments, start and end, that returns count of numbers which the square is also within the same range.

// 20, 500,        (400, 441, 484)    23 => 529, 477, 250000

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

console.log(squareCount(20, 600));

// write a function that takes two arguments, start and end, and returns the count of numbers between start and end that are divisible by either 3 or 5, but not both simultaneously.

function threeOrFive(start, end) {
    var counter = 0;
    for (var i = start; i < end; i = i + 1) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(threeOrFive(300, 2500));

// write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by 7.

function divisibleBySeven(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i = i + 1) {
        if (i % 7 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(divisibleBySeven(50, 400));

// 16 part two ruhshona
// Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by 7.

function countArrayDivisibleBy7(start, end) {
    var result = [];
    for (var i = start; i <= end; i = i + 1) {
        if (i % 7 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(countArrayDivisibleBy7(32, 780));

// 16 part three asilbek
// Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by both 3 and 5.

function countArrayThreeAndFour(start, end) {}

// 16 part five durdona

// write a function that receives two arguments, start and end, and returns an array of numbers between start and end(inclusive) that are divisible by either 3 or 5, but not both simultaneously.
