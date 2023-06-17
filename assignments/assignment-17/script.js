// part 1

// Write a function findCharFrequency that accepts a string and a character as arguments. This function should iterate through the string using a for loop and count the frequency of the specified character, then return this count.

// findCharFrequency('hello world', 'o');
//  Output: 2
// Explanation: The character 'o' appears twice in the string 'hello world'.

function findCharFrequency(string, char) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (char.includes(string[i])) {
            count++;
        }
    }
    return count;
}

console.log(findCharFrequency("representatives", "e")); // output: 4

// part 2

// Create a function vowelCounter that takes in a string and returns the count of vowels in it.

// vowelCounter('beautiful');
// Output: 5
// Explanation: The string 'beautiful' has 5 vowels - 'e', 'a', 'u', 'i', 'u'.

function vowelCounter(string) {
    var count = 0;
    var vowels = "aeiou";
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }
    return count;
}

console.log(vowelCounter("White House")); // output: 5

// part 3

// Create a function isAlphaNumeric that checks whether a given string only contains English letters and digits.

// isAlphaNumeric('hello123');
// Output: true
// Explanation: The string 'hello123' contains only letters and numbers, so the output is true.

// isAlphaNumeric('hello12?$3');
// Output false
// Explanation: The string 'hello12?$3' contains ? and $ chars, so output is false

function isAlphaNumeric(string) {
    var invalidChar = "!@#$%^&*()-_=+[]{};,<>./?|";
    for (var i = 0; i < string.length; i++) {
        if (invalidChar.includes(string[i])) {
            return false;
        }
    }
    return true;
}

console.log(isAlphaNumeric("Bye123")); // output: true
console.log(isAlphaNumeric("Bye123$")); // output: false

// part 4

// Write a function isAllVowels that verifies if a string consists only of vowel characters.

// isAllVowels('aeiou');
// Output: true
// Explanation: The string 'aeiou' only contains vowels, so the output is true.

// isAllVowels('aeiouuupu');
// Output: false
// Explanation: The string 'aeiouuupu' has a one consonant (p), so output is false

function isAllVowels(string) {
    var vowels = "aeiou";
    for (var i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])) {
            return false;
        }
    }
    return true;
}

console.log(isAllVowels("aeiou")); // output: true
console.log(isAllVowels("aeioukmnbv")); // output: false

// part 5

// Construct a function capitalizeVowels that changes all vowels in a lowercase string to uppercase.

// capitalizeVowels('hello');
// Output: 'hEllO'
// Explanation: The function converts all vowels 'e' and 'o' in the string 'hello' to uppercase, resulting in the new string 'hEllO'.

function capitalizeVowels(string) {
    var result = "";
    var vowels = "aeiou";
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            result = result + string[i].toUpperCase();
        } else {
            result = result + string[i];
        }
    }
    return result;
}

console.log(capitalizeVowels("nurmagamedov")); // output: "nUrmAgAmEdOv"

// part 6

// Build a function sliceFromFirstVowel that returns a substring starting from the first vowel to the end of the original string.

// sliceFromFirstVowel('javascript');
// Output: 'avascript'
// Explanation: The function slices the string 'javascript' starting from the first vowel 'a' to its end, resulting in the new string 'avascript'.

function sliceFromFirstVowel(str) {
    var vowels = "aeiou";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (vowels.includes(char)) {
            return str.slice(i);
        }
    }
    return str;
}

console.log(sliceFromFirstVowel("Nevada")); // output: "evada"

// part 7

// Create a function areConsonantsMore that returns true if the number of consonants in a string is higher than the number of vowels.

// areConsonantsMore('javascript');
// Output: true
// Explanation: The string 'javascript' contains 7 consonants and 3 vowels. Since the number of consonants is greater than the number of vowels, the output is true.

function areConsonantsMore(string) {
    var counterVowels = 0;
    var counterConsonants = 0;
    var vowels = "aeiou";
    var consonants = "bcdfghjklmnpqrstvwxyz";
    for (i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            counterVowels++;
        } else {
            counterConsonants++;
        }
    }
    // if (counterConsonants > counterVowels) {
    //     return true;
    // } else {
    //     return false;
    // }

    return counterConsonants > counterVowels; // 5 > 4
}

console.log(areConsonantsMore("Chicago")); // output: true

// part 8

// Implement a function doubleVowels that doubles all the vowels in a given string.

// doubleVowels('hello');
// Output: 'heelloo'
// Explanation: The function doubles all vowels in 'hello', which are 'e' and 'o', resulting in the new string 'heelloo'.

function doubleVowels(string) {
    var result = "";
    var vowels = "aoeiu";
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            result = result + string[i] + string[i];
        } else {
            result = result + string[i];
        }
    }
    return result;
}

console.log(doubleVowels("hello")); // output: "heelloo"

// part 9

// Write a function sumDigits that takes any valid integer and returns the sum of its digits.
// sumDigits(12345);
// Output: 15
// Explanation: The sum of the digits in the number 12345 is 1+2+3+4+5, which equals 15.

function sumDigits(number) {
    var sum = 0;
    var digits = Math.abs(number).toString().split("");

    for (var i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i], 10);
    }

    return sum;
}

console.log(sumDigits(12345)); // Output: 15

// part 10

// Create a function preserveLetters that takes a string of a single word and returns a new string with all characters except letters removed.
// preserveLetters('Hello,123');
// Output: 'Hello'
// Explanation: The function removes all characters in 'Hello,123' that are not letters, resulting in the new string 'Hello'.

function preserveLetters(str) {
    var result = "";

    for (var i = 0; i < str.length; i++) {
        const char = str[i];

        if (isLetter(char)) {
            result += char;
        }
    }

    return result;
}

function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}

console.log(preserveLetters("Hello,123")); // Output: 'Hello'
