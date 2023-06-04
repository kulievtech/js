// Comparison Operators

5 == "5"; // Equal to // true because 5 string converts into a number 5
console.log(5 == "5"); //
5 === "5"; // Strictly equal to // false because number 5 will not be converted into a number
console.log(5 === "5"); //
5 != "5"; // Not equal to // false because number 5 will convert into a number because of coercion
console.log(5 != "5"); //
5 !== "5"; // Strictly not equal to // true because number 5 will not be converted into a number because there 3 === signs (!) also is not equal sign
console.log(5 !== "5"); //
5 > 3; // Greater than // true because 5 is actually greater than 3
console.log(5 > 3); //
5 < 3; // Less than // false because 5 is not less than 3
console.log(5 < 3); //
5 >= 5; // Greater than or equal to // true because one of the condition is met which is 5 = 5
console.log(5 >= 5);
5 <= 6; // Less than or equal to // true because one of the condition is met which is 5 is less than 6.
console.log(5 <= 6);

// Logical Operators

true && false; // Logical AND // false because not both values are met
console.log(true && false);
true || false; // Logical OR // true because one of the condition is met
console.log(true || false);
!true; // Logical NOT // false because ! sign does outputs the opposite of the given value.
console.log(!true);
(true && false) || true; // Combination of AND and OR // true because if there is at least one true then that output will be met
console.log(true && false) || true;
(!false && true) || false; // Combination of NOT, AND and OR // true because if there is at least one true than the result will be true
console.log(!false && true) || false;

// Combining Logical and Comparison Operators

5 > 3 && 2 == "2"; // true && true // true
console.log(5 > 3 && 2 == "2");
5 !== "5" && 6 <= 10; // true && true // true
console.log(5 !== "5" && 6 <= 10);
3 === "3" || 7 > 10; // false || false // false
console.log(3 === "3" || 7 > 10);
4 < 2 || 3 !== "3"; // false || true // true
console.log(4 < 2 || 3 !== "3");
!(5 > 3 && 2 == "2"); //  (true && true) = true, with a bang sign ! // false
console.log(!(5 > 3 && 2 == "2"));
!(3 === "3" || 7 > 10); // (false || false) = false, with a bang sign ! // true
console.log(!(3 === "3" || 7 > 10));
(5 > 3 && !(2 === "2")) || 4 !== "4"; // (true && false) = false   || true // true
console.log((5 > 3 && !(2 === "2")) || 4 !== "4");
7 >= "7" || (!(9 < 11) && 2 !== "2"); // true || (false && true) = false // true
console.log(7 >= "7" || (!(9 < 11) && 2 !== "2"));

// More Complex Examples

5 > 3 && 2 == "2" && 7 < 10; // (true && true = true) && true // true
console.log(5 > 3 && 2 == "2" && 7 < 10);
5 !== "5" && 6 <= 10 && 2 === 2; // (true && true = true) && true // true
console.log(5 !== "5" && 6 <= 10 && 2 === 2);
3 === "3" || 7 > 10 || 4 !== 4; // (false || false = false) || false // false
console.log(3 === "3" || 7 > 10 || 4 !== 4);
4 < 2 || 3 !== "3" || 5 == "5"; // (false || true = true) || true // true
console.log(4 < 2 || 3 !== "3" || 5 == "5");
!((5 > 3 && 2 == "2") || 9 === "9"); // (!(true && true = true || false = true)) // false
console.log(!((5 > 3 && 2 == "2") || 9 === "9"));
!(3 === "3" || (7 > 10 && 5 !== 5)); // (!(false || (false && false = false))) // true
console.log(!(3 === "3" || (7 > 10 && 5 !== 5)));
(5 > 3 && !(2 === "2")) || (4 !== "4" && 7 < 8); // (true && true) || (true && true) // true
console.log((5 > 3 && !(2 === "2")) || (4 !== "4" && 7 < 8));
7 >= "7" || (!(9 < 11) && 2 !== "2") || 3 == "3"; // true || false && true // true
console.log(7 >= "7" || (!(9 < 11) && 2 !== "2") || 3 == "3");
