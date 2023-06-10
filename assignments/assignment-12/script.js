// part 1

function lengthOfString(string) {
    return string.length;
}

console.log(lengthOfString("Samarkand")); // output: 9

// part 2

function concatenateStrings(str1, str2) {
    return `${str1}, ${str2}`;
}

console.log(concatenateStrings("Welcome", "John")); // output: "Welcome, John"

// part 3

function toUpperCase(string) {
    return string.toUpperCase();
}

console.log(toUpperCase("new york city")); // output: "NEW YORK CITY"

// part 4

function toLowerCase(string) {
    return string.toLowerCase();
}

console.log(toLowerCase("THE ICE CREAM WAS MELTED")); // output: "the ice cream was melted"

// part 5 (Review)

function findSubstring(str, sub) {
    return str.includes(sub);
}

console.log(findSubstring("This is Tokyo, the capital of Japan", "Tokyo")); // output: true

// part 6

function replaceSubstring(str, sub1, sub2) {
    return str.replace(sub1, sub2);
}

console.log(replaceSubstring("Car value", "value", "price")); // output: "Car price"

// part 7

function charAtPosition(string, position) {
    return string[position];
}

console.log(charAtPosition("Microcalculator", 7)); // output: l

// part 8

function trimString(string) {
    return string.trim();
}

console.log(trimString("  California  ")); // output: "California"

// part 9

function stringStartsWith(str, sub) {
    return str.startsWith(sub);
}

console.log(stringStartsWith("Registan", "Reg")); // output: true

// part 10

function stringEndsWith(str, sub) {
    return str.endsWith(sub);
}

console.log(stringEndsWith("London", "meri")); // output: false

// part 11

function convertStringToNumber(string) {
    return parseInt(string);
}

console.log(convertStringToNumber("756")); // output: 756

// part 12

function sliceString(string, num1, num2) {
    return string.slice(num1, num2);
}

console.log(sliceString("Hello, Tohir", 6, 12)); // output: "Tohir"

// part 13

function concatenateAndToUpper(str1, str2) {
    return `${str1}, ${str2}`.toUpperCase();
}

console.log(concatenateAndToUpper("Come on", "in")); // output: "COME ON, IN"
