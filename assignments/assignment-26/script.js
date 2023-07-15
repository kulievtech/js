// 1. Character Pairing: Write a function that accepts a string and returns all possible pairs of characters in the input string. For this, use a nested loop to go through each possible pair of characters.

function stringPairChar(string) {
    let pairs = [];
    let strSplit = string.split("");
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            pairs.push(string[i] + string[j]);
        }
    }
    return pairs;
}

console.log(stringPairChar("abc")); // output: [ 'ab', 'ac', 'bc' ]

// 2. Divisible by Three Pair Sum: Create a function divisibleByThreePairSum(array) that takes an array of numbers as input. It should return an array of all the pairs of indices, where the elements sum to a multiple of three. This task will require a nested loop to go through each possible pair of numbers.

function divisibleByThreePairSum(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % 3 === 0) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

console.log(divisibleByThreePairSum([1, 2, 3, 4, 5])); // output: [ [ 0, 1 ], [ 0, 4 ], [ 1, 3 ], [ 3, 4 ] ]

// 3. Sum of Pairs: Construct a function that takes an array and a target sum as inputs. The function should return all pairs of numbers in the array that sum up to the target. A nested loop will be necessary to examine all possible pairs of numbers.

function sumOfPairs(array, targetSum) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                result.push([array[i], array[j]]);
            }
        }
    }
    return result;
}

console.log(sumOfPairs([1, 2, 3, 4, 5], 5)); // output: [ [ 1, 4 ], [ 2, 3 ] ]

// 4. Check Prime: Design a function that receives a number as input and checks if it is a prime number. This task will require a loop to check all numbers up to the square root of the input number to see if they divide the input number evenly.

function isPrimeNumber(number) {}

// 5. Prime Range: Generate a function that accepts a range (two numbers) as input and returns an object. The object should contain the keys primes (an array of all prime numbers in the range) and count (the total number of prime numbers in the range). This task will require nested loops; an outer loop to iterate through the range, and an inner loop (within the checkPrime function) to check if a number is prime.

function primeRange(num1, num2) {}

// 6. All Substrings: Write a function that takes a string as an input and returns an array of all its substrings.

function allSubstrings(string) {
    let substring = [];
    let strSplit = string.split("");
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            substring.push(string.slice(i, j));
        }
    }
    return substring;
}

console.log(allSubstrings("abc")); // output: [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]
