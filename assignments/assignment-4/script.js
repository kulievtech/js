var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = " - Nelson Mandela";

// template literals method

var templateResult = `${part1} ${part2} ${part3} ${part4} ${part5} ${author}`;
console.log(templateResult);

// contact() method

var contactResult = part1.concat(
    " ",
    part2,
    " ",
    part3,
    " ",
    part4,
    " ",
    part5,
    " ",
    author
);
console.log(contactResult);

// + operator method

var plusOperatorResult =
    part1 +
    " " +
    part2 +
    " " +
    part3 +
    " " +
    part4 +
    " " +
    part5 +
    " " +
    author;
console.log(plusOperatorResult);

// += operator method

var assignmentOperatorResult = "";

assignmentOperatorResult += part1 + " ";
assignmentOperatorResult += part2 + " ";
assignmentOperatorResult += part3 + " ";
assignmentOperatorResult += part4 + " ";
assignmentOperatorResult += part5 + " " + author;
console.log(assignmentOperatorResult);
