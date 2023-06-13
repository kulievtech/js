// // part 1

// function combineArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// console.log(combineArrays([1, 2, 3], [4, 5, 6])); // output: [ 1, 2, 3, 4, 5, 6 ]

// // or another way to write

// function combineArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];

// console.log(combineArrays(arr1, arr2)); // output: [ 1, 2, 3, 4, 5, 6 ]

// // part 2

// function reverseOrder(arr) {
//     return arr.reverse();
// }

// console.log(reverseOrder(["Alex", "Volk", "Islam"])); // output: [ 'Islam', 'Volk', 'Alex' ]

// // or another way to write

// function reverseOrder(arr) {
//     return arr.reverse();
// }

// var arr = ["Alex", "Volk", "Islam"];

// console.log(reverseOrder(arr)); // output: [ 'Islam', 'Volk', 'Alex' ]

// // part 3

// function checkValue(arr, value) {
//     if (arr.includes(value)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkValue([13, 14, 15, 16], 14)); // output: true

// // or another way to write

// function checkValue(arr, value) {
//     if (arr.includes(value)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var arr = [13, 14, 15, 16];
// var value = 14;

// console.log(checkValue(arr, value)); // output: true

// // part 4

// function isArray(arr) {
//     if (Array.isArray(arr)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isArray(12)); // output: false

// // or another way to write

// function isArray(arr) {
//     if (Array.isArray(arr)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var arr = 12;

// console.log(isArray(arr)); // output: false

// // part 5

// function arraySlice(arr, num1, num2) {
//     return arr.slice(num1, num2);
// }

// console.log(arraySlice([1, 2, 3, 4, 5], 1, 4)); // output:[ 2, 3, 4 ]

// // or another way to write

// function arraySlice(arr, num1, num2) {
//     return arr.slice(num1, num2);
// }

// var unslicedArr = [1, 2, 3, 4, 5];
// var slicedArr = arraySlice(unslicedArr, 1, 4);

// console.log(slicedArr); // output:[ 2, 3, 4 ]

// // part 6

// function removeLast(arr) {
//     arr.pop(); // 500;
//     return arr;
// }

// var arr = [100, 200, 300, 400, 500];
// // var lastElement = arr.pop();

// console.log(removeLast(arr));

// // console.log(arr); // output: [ 100, 200, 300, 400 ]
// // console.log(lastElement); // output: 500

// // part 7

// function removeFirst(arr) {
//     arr.shift();
//     return arr;
// }

// var arr = ["tiger", "lion", "zebra", "monkey"];
// var firstElement = arr.shift();

// console.log(arr); // output: [ 'lion', 'zebra', 'monkey' ]
// console.log(firstElement); // output:tiger

// // part 8

// function addAtBeginning(arr, value) {
//     arr.unshift(value);
//     return arr;
// }

// var arr = [50, 60, 70, 80, 90];
// var newLength = arr.unshift(40);

// console.log(arr);
// console.log(newLength);

// // part 9

// function addAtEnd(arr, value) {
//     var result = arr.push(value);
//     return arr;
// }

// var arr = ["NYC", "LA", "PA", "MA"];
// var newLength = arr.push("Utah");

// console.log(arr);
// console.log(newLength);

// part 1

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9];

console.log(combineArrays(arr1, arr2));

// part 2
