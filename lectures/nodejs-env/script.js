// create a function that takes two strings, and returns a string that have more characters. "hello", "hi"

function longerString(str1, str2) {
    if (str1.length > str2.length) {
        return str1;
    } else {
        return str2;
    }
}

console.log(longerString("Hello", "hi"));
