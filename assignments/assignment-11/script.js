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
console.log(result); // output: 5

// or another way to write

function subtractTwo(num1, num2) {
    return num1 - num2;
}

console.log(subtractTwo(10, 5)); // output: 5

// part 5

function divideTwo(num1, num2) {
    var quotient = num1 / num2;
    return quotient;
}

var result = divideTwo(48, 6);
console.log(result); // output: 8

// or another way to write

function divideTwo(num1, num2) {
    return num1 / num2;
}

console.log(divideTwo(48, 6)); // output: 8

// part 6

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4)); // output: true
console.log(isEven(7)); // output: false

// part 7

function maxValue(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxValue(23, 20)); // Output: 23 because 23 > 20

// part 8

function minValue(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(minValue(49, 38));

// part 9

function absoluteValue(number) {
    return Math.abs(number);
}

console.log(absoluteValue(-5));

// part 10

function roundNumber(number) {
    return Math.round(number);
}

console.log(roundNumber(7.698));

// part 11

function ceilNumber(number) {
    return Math.ceil(number);
}

console.log(ceilNumber(9.2));

// part 12

function floorNumber(number) {
    return Math.floor(number);
}

console.log(floorNumber(17.8));

// part 13

function modulus(num1, num2) {
    var remainder = num1 % num2;
    return remainder;
}

var result = modulus(10, 3);
console.log(result);

// or another way

function modulus(num1, num2) {
    return num1 % num2;
}

console.log(modulus(10, 3));

//part 14

function power(num1, num2) {
    var exponentValue = Math.pow(num1, num2);
    return exponentValue;
}

var result = power(2, 3);
console.log(result);

// or another way to write

function power(num1, num2) {
    return Math.pow(num1, num2);
}

console.log(power(2, 3));

// part 15

function squareRoot(number) {
    var sqrtValue = Math.sqrt(number);
    return sqrtValue;
}

var result = squareRoot(16);
console.log(result);

// or another way to write

function squareRoot(number) {
    return Math.sqrt(number);
}

console.log(squareRoot(16));
