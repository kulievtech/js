// create a function that takes an array of Numbers. Return the greatest one.
// input: [45, 56 , -19, 900, -345, 0, 67, 30]
// output: 900

function findGreatestNumber(numbers) {
    let greatestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (greatestNumber < numbers[i]) {
            greatestNumber = numbers[i];
        }
    }
    return greatestNumber;
}

console.log(findGreatestNumber([45, 50, -20, 200, -345, 500, 999, 300, 4000])); // output: 4000

// create a function that takes an array of Numbers. Return the smallest number from the array.
// input: [45, 56 , -19, 900, -345, 0, 67, 30]
// output: 900

function findSmallestNumber(numbers) {
    let smallestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (smallestNumber > numbers[i]) {
            smallestNumber = numbers[i];
        }
    }
    return smallestNumber;
}

console.log(findSmallestNumber([45, 50, -20, 200, -345, 500, 999, 300, 4000])); // output: -345

// create a function that takes the same size(length) two arrays. Return true if both arrays are the same.
// Input: [1,2,3], [1,2,3]  // output: true
// Input: [1,2,3], [1,2,4]  // output: false

function sameArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(sameArray([1, 2, 3], [1, 2, 4])); // output: false

// Create a function, that takes two object (it can be different size), check if both objects are structurally the same.
// input: {a: 1, b: 2, c: 5} {c: 5, b: 2, a: 1,}    output: true
// input: {a: 1, b: 2, d: 5} {a: 1, b: 2, d: 4,}    output: false

function isSameObj(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(isSameObj({ a: 1, b: 2, c: 5 }, { c: 5, b: 2, a: 1 })); // output: true
console.log(isSameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4 })); // output: false
console.log(isSameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4, f: 9 })); // output: false
