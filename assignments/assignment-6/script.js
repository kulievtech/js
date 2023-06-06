// Part 1

var name1 = "John Doe";
var name2 = "Jane Smith";
var name3 = "Bob Johnson";

// Name 1

var spaceIndex1 = name1.indexOf(" ");
var firstNameInitial1 = name1[0];
var lastNameInitial1 = name1[spaceIndex1 + 1];

console.log((firstNameInitial1 + lastNameInitial1).toLocaleUpperCase());

// Name 2

var spaceIndex2 = name2.indexOf(" ");
var firstNameInitial2 = name2[0];
var lastNameInitial2 = name3[spaceIndex2 + 1];

console.log((firstNameInitial2 + lastNameInitial2).toLocaleUpperCase());

// Name 3

var spaceIndex3 = name3.indexOf(" ");
var firstNameInitial3 = name3[0];
var lastNameInitial3 = name3[spaceIndex2 + 1];

console.log((firstNameInitial3 + lastNameInitial3).toLocaleUpperCase());
