// part 7
// Create a function areConsonantsMore that returns true if the number of consonants in a string is higher than the number of vowels.

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

console.log(areConsonantsMore("javascript"));

// Output: true
// Explanation: The string 'javascript' contains 7 consonants and 3 vowels. Since the number of consonants is greater than the number of vowels, the output is true.

// part 5

// Construct a function capitalizeVowels that changes all vowels in a lowercase string to uppercase.

function capitalizeVowels(string) {
    var result = "";
    var vowels = "aeiou";
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (vowels.includes(char)) {
            result = result + char.toUpperCase();
        } else {
            result = result + char;
        }
    }
    return result;
}

console.log(capitalizeVowels("nurmagamedov"));
// Output: 'hEllO'
// Explanation: The function converts all vowels 'e' and 'o' in the string 'hello' to uppercase, resulting in the new string 'hEllO'.

// part 4

// Write a function isAllVowels that verifies if a string consists only of vowel characters.

//  isAllVowels('aeiou');
// Output: true
// Explanation: The string 'aeiou' only contains vowels, so the output is true.

//isAllVowels('aeiouuupu');
// Output: false
// Explanation: The string 'aeiouuupu' has a one consonant (p), so output is false

function isAllVowels(str) {
    var vowels = "aeiou";
    for (var i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            return false;
        }
    }
    return true;
}

console.log(isAllVowels("aueo"));
console.log(isAllVowels("Hello"));

// part 8
// Implement a function doubleVowels that doubles all the vowels in a given string.

//doubleVowels('hello');
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

console.log(doubleVowels("hello"));

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

console.log(sliceFromFirstVowel("javascript"));

// part 3
// Create a function isAlphaNumeric that checks whether a given string only contains English letters and digits.
// isAlphaNumeric('hello123');
// Output: true
// Explanation: The string 'hello123' contains only letters and numbers, so the output is true.

//isAlphaNumeric('hello12?$3');
// Output false
// Explanation: The string 'hello12?$3' contains ? and $ chars, so output is false

function isAlphaNumeric(str) {
    var englishLettersDigits = "abcefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < str.length; i++) {
        if (!englishLettersDigits.includes(str[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

console.log(isAlphaNumeric("hello123"));
console.log(isAlphaNumeric("hello123?$3"));
