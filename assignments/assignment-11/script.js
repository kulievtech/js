// part 1

function addTwo(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var result = addTwo(4, 5);
console.log(result); // output: 9

// or another way to write

function addTwo(num1, num2) {
    return num1 + num2;
}

console.log(addTwo(4, 5)); // output: 9

// part 2

function multiplyTwo(num1, num2) {
    var product = num1 * num2;
    return product;
}

var result = multiplyTwo(7, 7);
console.log(result); // output: 49

// or another way to write

function multiplyTwo(num1, num2) {
    return num1 * num2;
}

console.log(multiplyTwo(7, 7)); // output:49

// part 3

function isOdd(number) {
    if (number % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(isOdd(13)); // output: true
console.log(isOdd(16)); // output: false

// part 4

function subtractTwo(num1, num2) {
    var difference = num1 - num2;
    return difference;
}

var result = subtractTwo(10, 5);
console.log(result);

// or another way to write

function subtractTwo(num1, num2) {
    return num1 - num2;
}

console.log(subtractTwo(15, 5));

// part 5

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));

// part 6

function maxValue(num1, num2) {}
