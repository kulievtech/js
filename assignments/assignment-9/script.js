// Part 1

var firstName = "";
var randomNumber1 = Math.floor(Math.random() * 10) + 1;

if (randomNumber1 >= 1 && randomNumber1 <= 3) {
    firstName = "Leo";
} else if (randomNumber1 >= 4 && randomNumber1 <= 7) {
    firstName = "Oliver";
} else {
    firstName = "Benjamin";
}

console.log(firstName);

// Part 2

var randomNumber2 = Math.floor(Math.random() * 4) + 1;

if (randomNumber2 === 1) {
    console.log(
        `Dear ${firstName}, wishing you a day filled with happiness and a year filled with joy.`
    );
} else if (randomNumber2 === 2) {
    console.log(
        `Dear ${firstName}, sending you smiles for every moment of your special day.`
    );
} else if (randomNumber2 === 3) {
    console.log(
        `Dear ${firstName}, have a wonderful time and a very happy day!`
    );
} else {
    console.log(
        `Dear ${firstName}, hope your special day brings you all that your heart desires!`
    );
}
