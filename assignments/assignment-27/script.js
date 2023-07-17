// 1. Find the Maximum Number

//Write a function that takes an array of arrays as input and finds the maximum number in the nested arrays. Return the maximum number found.

//function findMaxNumber(arr) {}
//Example:

//Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//Output: 9

function findMaxNumber(arr) {
    let maxNum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (maxNum < arr[i][j]) {
                maxNum = arr[i][j];
            }
        }
    }
    return maxNum;
}

console.log(
    findMaxNumber([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
); //Output: 9

// 2. Count Characters

//Write a function that takes an array of arrays of characters as input. Count the occurrences of each character and return an object with character counts in the format { character: count }.

//function countCharacters(arr) {}
//Example:

//Input: [['a', 'b', 'a'], ['c', 'a', 'd']]

//Output: { a: 3, b: 1, c: 1, d: 1 }

function countCharacters(arr) {
    let charCount = {};

    for (let i = 0; i < arr.length; i++) {
        const innerArr = arr[i];

        for (let j = 0; j < innerArr.length; j++) {
            const char = innerArr[j];

            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
    }
    return charCount;
}

console.log(
    countCharacters([
        ["a", "b", "a"],
        ["c", "a", "d"]
    ])
); // Output: { a: 3, b: 1, c: 1, d: 1 }

// 3. Filter Divisible Numbers

//Write a function that takes an array of arrays of numbers as input. Create a new array that contains only the numbers divisible by 3 from the nested arrays. Return the new array.

//function filterDivisibleByThree(arr) { }
//Example:

//Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//Output: [3, 6, 9]

function filterDivisibleByThree(arr) {
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        const innerArr = arr[i];

        for (let j = 0; j < innerArr.length; j++) {
            const num = innerArr[j];

            if (num % 3 === 0) {
                uniqueArr.push(num);
            }
        }
    }
    return uniqueArr;
}

console.log(
    filterDivisibleByThree([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
); //Output: [3, 6, 9]

// 4. Find the Longest String

//Write a function that takes an array of arrays of strings as input. Find the longest string among the nested arrays and return it.

//function findLongestString(arr) { }
//Example:

//Input: [['apple', 'banana'], ['carrot', 'date', 'eggplant'], ['fig']]

//Output: 'eggplant'

function findLongestString(arr) {
    let longestStr = "";

    for (let i = 0; i < arr.length; i++) {
        const innerArr = arr[i];

        for (let j = 0; j < innerArr.length; j++) {
            const str = innerArr[j];

            if (longestStr.length < str.length) {
                longestStr = str;
            }
        }
    }
    return longestStr;
}

console.log(
    findLongestString([
        ["apple", "banana"],
        ["carrot", "date", "eggplant"],
        ["fig"]
    ])
);

// Part 5: Sum of Numbers (including nested arrays)

//Write a function that takes an array as input. The array may contain numbers and/or nested arrays of numbers. Find the sum of all the numbers, including the numbers in the nested arrays. Use Array.isArray() to check if a passed value is an array.

//function sumArray(arr) { }
//Example:

//Input: [1, 2, [3, 4, 5, 6], 7, [8, 9]]

//Output: 45

function sumArray(arr) {
    let outerNumSum = 0;
    let innerNumSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const charInsideArr = arr[i];

        if (Array.isArray(charInsideArr)) {
            for (let j = 0; j < charInsideArr.length; j++) {
                const nestedArrChar = charInsideArr[j];
                outerNumSum = outerNumSum + nestedArrChar;
            }
        } else {
            innerNumSum = innerNumSum + charInsideArr;
        }
    }

    return outerNumSum + innerNumSum;
}

console.log(sumArray([1, 2, [3, 4, 5, 6], 7, [8, 9]])); // output: 45

// 6. Capitalize Strings

//Write a function that takes an array of arrays of lowercase strings as input. Return a new nested array with all the strings capitalized.

//function capitalizeStrings(arr) {}
//Example:

//Input: [['apple', 'banana'], ['carrot', 'date'], ['eggplant']]

//Output: [['APPLE', 'BANANA'], ['CARROT', 'DATE'], ['EGGPLANT']]

function capitalizeStrings(arr) {
    let capitalizedArr = [];

    for (let i = 0; i < arr.length; i++) {
        const innerArr = arr[i];
        const capitalizedInnerArr = [];

        for (let j = 0; j < innerArr.length; j++) {
            const str = innerArr[j];
            const capitalizedStr = str.toUpperCase();
            capitalizedInnerArr.push(capitalizedStr);
        }
        capitalizedArr.push(capitalizedInnerArr);
    }
    return capitalizedArr;
}

console.log(
    capitalizeStrings([["apple", "banana"], ["carrot", "date"], ["eggplant"]])
);

// 7. Find Minimum and Maximum Arrays

//Write a function that takes an array of arrays as input. Return an object with two keys: 'min' and 'max'. The 'min' key should have the value of the inner array with the smallest sum, and the 'max' key should have the value of the inner array with the largest sum.

//function findMinMaxArrays(arr) {}
//Example:

//Input: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

//Output: { min: [4, 5], max: [6, 7, 8, 9] }

function findMinMaxArrays(arr) {
    let minSum = Infinity;
    let maxSum = -Infinity;
    let minArray = [];
    let maxArray = [];

    for (let i = 0; i < arr.length; i++) {
        const innerArr = arr[i];
        let sum = 0;

        for (let j = 0; j < arr[i].length; j++) {
            const numbers = innerArr[j];
            sum = sum + numbers;
        }

        if (sum < minSum) {
            minSum = sum;
            minArray = innerArr;
        }

        if (sum > maxSum) {
            maxSum = sum;
            maxArray = innerArr;
        }
    }

    return { min: minArray, max: maxArray };
}

console.log(
    findMinMaxArrays([
        [1, 2, 3],
        [4, 5],
        [6, 7, 8, 9]
    ])
); // output: { min: [ 1, 2, 3 ], max: [ 6, 7, 8, 9 ] }

// 8. Merge Nested Arrays

//Write a function that takes an array of arrays as input. Merge the nested arrays into a single array, maintaining the order of the nested arrays. Return the merged array.

//function mergeNestedArrays(arr) { // Your implementation here }
//Example:

//Input: [[1, 2], [3, 4], [5, 6]]

//Output: [1, 2, 3, 4, 5, 6]

function mergeNestedArrays(arr) {
    const mergedArr = [];

    for (let i = 0; i < arr.length; i++) {
        const innerArr = arr[i];

        for (let j = 0; j < innerArr.length; j++) {
            const numbers = innerArr[j];

            mergedArr.push(numbers);
        }
    }
    return mergedArr;
}

console.log(
    mergeNestedArrays([
        [1, 2],
        [3, 4],
        [5, 6]
    ])
); // output: [1, 2, 3, 4, 5, 6]
