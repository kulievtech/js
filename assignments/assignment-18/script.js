// Assignment 18

// part 1

//String Index Multiplier

//Create a function named stringIndexMultiplier that accepts an array of strings as an argument. This function should return the total sum of the product of each string's length and its index in the array.

//Example: stringIndexMultiplier(["Hello", "world", "!"]);

//"Hello" has 5 characters and index 0, so the product is 5*0 = 0.
//"world" has 5 characters and index 1, so the product is 5*1 = 5.
//"!" has 1 character and index 2, so the product is 1*2 = 2.
//So, the sum of these products is 0+5+2 = 7.

function stringIndexMultiplier(array) {
    var totalSum = 0;

    for (var i = 0; i < array.length; i++) {
        var str = array[i];

        var product = str.length * [i];
        totalSum = totalSum + product;
    }

    return totalSum;
}

console.log(stringIndexMultiplier(["Hello", "world", "!"])); // output: 7

// part 2

//Divisibility Filter

//Create a function named divisibilityFilter that accepts an array of numbers as an argument. The function should return a new array that only includes the numbers from the original array that are divisible by 3 or 5, but not both.

//Example: divisibilityFilter([3, 5, 15, 18, 20, 30]);

//This should return [3, 5, 18, 20].

function divisibilityFilter(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        var num = array[i];

        if (
            (num % 3 === 0 && num % 5 !== 0) ||
            (num % 3 !== 0 && num % 5 === 0)
        ) {
            newArray.push(num);
        }
    }

    return newArray;
}

console.log(divisibilityFilter([3, 5, 15, 18, 20, 30])); // output: [ 3, 5, 18, 20 ]

// part 3

//Single Digit Sum

//Create a function named singleDigitSum that accepts an array of numbers as an argument. This function should return the sum of all numbers in the array that have only one digit. Note that the numbers can be both positive and negative.

//Example: singleDigitSum([-10, 1, -2, 30, 6, -7]);

//The numbers with only one digit are 1, -2, 6, -7, and their sum is -2.

//Edge Case Example: singleDigitSum([]);

//An empty array should return 0 because there are no elements to sum.

function singleDigitSum(array) {
    var totalSum = 0;

    for (var i = 0; i < array.length; i++) {
        var num = Math.abs(array[i]);

        if (num < 10 && num >= 0) {
            totalSum = totalSum + array[i];
        }
    }
    return totalSum;
}

console.log(singleDigitSum([-10, 1, -2, 30, 6, -7])); // output: -2

// part 4

//Binary Counter

//Create a function named binaryCounter that accepts an array of 0s and 1s as an argument. The function should return a two-element array showing the count of 0s and 1s in the original array, in the form: [numberOfZeroes, numberOfOnes].

//Example: binaryCounter([0, 1, 0, 1, 1, 0, 0, 1]);

//This should return [4, 4], as there are four 0s and four 1s in the array.

function binaryCounter(array) {
    var count1 = 0;
    var count2 = 0;

    for (var i = 0; i < array.length; i++) {
        var num = array[i];

        if (num === 0) {
            count1++;
        } else if (num === 1) {
            count2++;
        }
    }
    return [count1, count2];
}

console.log(binaryCounter([0, 1, 0, 1, 1, 0, 0, 1])); // output: [4,4]

// part 5

//Unique String Filter

//Create a function named uniqueStringFilter that accepts an array of strings as an argument. The function should return a new array that includes only unique strings from the original array. Note that strings are considered the same regardless of case, so "Hello" and "hello" should be treated as duplicates.

//Example: uniqueStringFilter(["Hello", "hello", "World", "world", "WORLD", "hello", "HELLO", "Test"]);

//This should return ["Hello", "World", "Test"], because all other strings are duplicates (ignoring case) of these.
