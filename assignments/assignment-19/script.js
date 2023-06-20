// part 1

//Create a function splitByComma(str) that takes a string str as an argument. This function should split the input string into an array by using a comma as the delimiter.

//Example Input: "apple,banana,grape"
//Example Output: ["apple", "banana", "grape"]
//Example Input: "red,green,blue,yellow"
//Example Output: ["red", "green", "blue", "yellow"]

function splitByComma(str) {
    let arr = str.split(","); // string to array using "," Comma.
    return arr;
}

console.log(splitByComma("apple,banana,grape")); // Output: ["apple", "banana", "grape"]

// part 2

//Create a function joinWithDash(arr) that takes an array arr as an argument. The function should join all the elements of the array into a single string with each element separated by a dash "-".

//Example Input: ["sun", "moon", "stars"]
//Example Output: "sun-moon-stars"
//Example Input: ["quick", "brown", "fox"]
//Example Output: "quick-brown-fox"

function joinWithDash(arr) {
    let str = arr.join("-"); // array to string using "-" Hyphen
    return str;
}

console.log(joinWithDash(["sun", "moon", "stars"])); // Output: "sun-moon-stars"

// part 3

//Create a function splitSentenceIntoWords(sentence) that takes a sentence as an argument. The function should split the sentence into an array of words. Assume words in the sentence are separated by spaces.
//Example Input: "The quick brown fox"
//Example Output: ["The", "quick", "brown", "fox"]
//Example Input: "Hello World from JavaScript"
//Example Output: ["Hello", "World", "from", "JavaScript"]

function splitSentenceIntoWords(sentence) {
    let arr = sentence.split(" "); // string to array using " " (space)
    return arr;
}

console.log(splitSentenceIntoWords("The quick brown fox")); // Output: ["The", "quick", "brown", "fox"]

// part 4 (HARD) could not capitalize second word (could not camelCase)

//Create a function createCamelCase(str) that takes a string str as an argument. The string contains words separated by spaces. The function should return a camelCase version of the string.
//Example Input: "Hello world"
//Example Output: "helloWorld"
//Example Input: "first name"
//Example Output: "firstName"

function createCamelCase(str) {
    let strParts = str.split(" ");
    let firstPart = strParts[0];
    let secondPart = strParts[1];

    return (
        firstPart.toLowerCase() +
        secondPart[0].toUpperCase() +
        secondPart.slice(1).toLowerCase()
    );
}

// function createCamelCase(str) {
//     let strParts = str.split(" "); //["Hello","world"]
//     strParts[0] = strParts[0].toLowerCase();
//     strParts[1] =
//         strParts[1][0].toUpperCase() + strParts[1].slice(1).toLowerCase();
//     console.log(strParts);

//     return strParts.join("");
// }

console.log(createCamelCase("Hello world"));

// part 5

//Create a function splitAndReverse(str, separator) that takes a string str and a separator as arguments. The function should split the string using the separator, reverse the obtained array and then join it back into a string using the separator.
//Example Input: ("one-two-three", "-")
//Example Output: "three-two-one"
//Example Input: ("front middle back", " ")
//Example Output: "back middle front"

function splitAndReverse(str, separator) {
    let result = str.split(separator).reverse().join(separator); // string to array, reverse the array and back to string
    return result;
}

console.log(splitAndReverse("one-two-three", "-")); // Output: "three-two-one"

// part 6

//Create a function replaceSpacesWithUnderscore(str) that takes a string str as an argument. The function should replace all spaces in the string with underscores.
//Example Input: "Hello world"
//Example Output: "Hello_world"
//Example Input: "OpenAI GPT-4 rocks"
//Example Output: "OpenAI_GPT-4_rocks"

function replaceSpacesWithUnderscore(str) {
    // let result = str.replaceAll(" ", "_"); // string to string by replacing space with underscore
    // return result;
    let result = str.split(" ").join("_");
    return result;
}

console.log(replaceSpacesWithUnderscore("Hello world again")); // output: "Hello_world"

// part 7 (HARD)

//Create a function splitByMultipleCharacters(str, characters) that takes a string str and an array of characters as arguments. This function should split the string each time one of the characters in the array is encountered.
//Example Input: ("apple-orange-banana", ["-", "a"])
//Example Output: ["", "pple", "or", "nge", "b", "n", "n", ""]
//Example Input: ("red,green,blue", [",", "e"])
//Example Output: ["r", "d", "gr", "", "n", "blu", ""]

function splitByMultipleCharacters(str, chars) {
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];

        str = str.split(char).join("%");
    }
    return str.split("%");
}

console.log(splitByMultipleCharacters("apple-orange-banana", ["-", "a"]));

// part 8

//Create a function countWordsInSentence(sentence) that takes a sentence as an argument and returns the number of words in the sentence. Assume words are separated by a single space.
//Example Input: "The quick brown fox"
//Example Output: 4
//Example Input: "Hello World from JavaScript"
//Example Output: 4

function countWordsInSentence(sentence) {
    let result = sentence.split(" ").length;
    return result;
}

console.log(countWordsInSentence("The quick brown fox")); // Output: 4

// To do this, first convert the string int array using split(" ") method and get the length.

// part 9

//Create a function swapFirstAndLastName(fullName) that takes a string fullName which has first name and last name separated by a space. The function should return a string where the last name comes before the first name, separated by a comma.
//Example Input: "John Doe"
//Example Output: "Doe, John"
//Example Input: "Alice Wonderland"
//Example Output: "Wonderland, Alice"

function swapFirstAndLastName(fullName) {
    let result = fullName.split(" ").reverse().join(", ");
    return result;
}

console.log(swapFirstAndLastName("John Doe")); // Output: "Doe, John"

// part 10  (Hard)

//Create a function createHashtag(str) that takes a string str as an argument and returns a hashtag version of it. Words should be joined with no spaces and every word should start with a capital letter.
//Example Input: "hello world"
//Example Output: "#HelloWorld"
//Example Input: "OpenAI is awesome"
//Example Output: "#OpenAIIIsAwesome"

function createHashtag(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word[0].toUpperCase() + word.slice(1);
    }
    return "#" + words.join("");
}

console.log(createHashtag("hello world"));
console.log(createHashtag("OpenAI is awesome"));

// or another way to write

function createHashtag(str) {
    let arr = str.split(" ");
    let arrWithHash = ["#"];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let capitalizedWord = word[0].toUpperCase() + word.slice(1);
        arrWithHash.push(capitalizedWord);
    }
    return arrWithHash.join("");
}

console.log(createHashtag("hello world"));
console.log(createHashtag("OpenAI is awesome"));
