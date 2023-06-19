/* Problem 1 : Even Index Summation with String Input
​
Task: Create a function named evenIndexSumString that accepts a string of digits as an argument. The function should return the sum of digits which are located at even indices in the string.
​
Example 1: evenIndexSumString("1234567890"); should return 20, because the sum of digits at even indices (0, 2, 4, 6, 8) is 1 + 3 + 5 + 7 + 9 = 25.
​
Example 2: evenIndexSumString("1020304050"); should return 10, because the sum of digits at even indices (0, 2, 4, 6, 8) is 1 + 2 + 3 + 4 + 5 = 15.
​
Edge Case 1: evenIndexSumString(""); should return 0, because the string is empty, hence no digits to sum.
​
Edge Case 2: evenIndexSumString("1"); should return 1, because the string only has one digit, which is located at index 0 (an even index).
​
Make sure students validate input types, handle error conditions, and remember to convert string digits into numbers for mathematical operations in their function. */

function evenIndexSumString(stringDigits) {
    var total = 0;
    for (var i = 0; i < stringDigits.length; i = i + 2) {
        var stringToNumber = parseInt(stringDigits[i]);
        total = total + stringToNumber;
    }
    return total;
}

console.log(evenIndexSumString("1234567890")); // output: 25

/* Problem 2: String to Char Array (Advanced)
​
Task: Create a function named stringToCharArrayAdvanced that accepts a string as an argument. The function should return an array where each element is a character from the input string. Ignore numbers and special characters (!?/).
​
Example 1: stringToCharArrayAdvanced("hello!"); should return ['h', 'e', 'l', 'l', 'o'].
​
Example 2: stringToCharArrayAdvanced("world?123"); should return ['w', 'o', 'r', 'l', 'd'].
​
Edge Case 1: stringToCharArrayAdvanced("!/?123"); should return [], because the string only contains ignored characters, so there are no valid characters to form an array.
​
Edge Case 2: stringToCharArrayAdvanced("a1?"); should return ['a'], because the string contains a valid character 'a'
*/

function stringToCharArrayAdvanced(string) {
    var stringToArray = string.split("");
    var invalidChar = "!@#$%^&*()_-+?/";
    var invalidNum = "1234567890";
    for (var i = 0; i < string.length; i = i + 1) {
        if (invalidChar.includes(string[i])) {
            return stringToArray;
        }
    }
}

console.log(stringToCharArrayAdvanced("Hello!"));

/* Problem 3: Even Index Multiplication with String Input
​
Task: Create a function named evenIndexMultiplyString that accepts a string of digits as an argument. The function should return the product of digits which are located at even indices in the string.
​
Example 1: evenIndexMultiplyString("1234567890"); should return 945, because the product of digits at even indices (0, 2, 4, 6, 8) is 1 * 3 * 5 * 7 * 9 = 945.
​
Example 2: evenIndexMultiplyString("1020304050"); should return 120, because the product of digits at even indices (0, 2, 4, 6, 8) is 1 * 2 * 3 * 4 * 5 = 120.
​
Edge Case 1: evenIndexMultiplyString(""); should return 1, because the string is empty, so there are no digits to multiply. By convention, the product of no factors is equal to 1.
​
Edge Case 2: evenIndexMultiplyString("1"); should return 1, because the string only has one digit, which is located at index 0 (an even index).
*/

function evenIndexMultiplyString(stringDigits) {
    var total = 1;
    for (var i = 0; i < stringDigits.length; i = i + 2) {
        var stringToNumber = parseInt(stringDigits[i]);
        total = total * stringToNumber;
    }
    return total;
}

console.log(evenIndexMultiplyString("1234567890")); // output: 945
