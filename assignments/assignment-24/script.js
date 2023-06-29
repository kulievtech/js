// 1. Creating User Profiles.

// Explanation: In this problem, we have a userProfile object that contains properties such as name, age, email, and isAdmin. The task is to create a function printUserProfile that iterates over the userProfile object and prints all the properties and their corresponding values. This allows us to examine each property of the object.

const userProfile = {
    name: "John Doe",
    age: 30,
    email: "JohnDoe@example.com",
    isAdmin: true
};

function printUserProfile(userProfile) {
    for (const key in userProfile) {
        console.log(`${key}: ${userProfile[key]}`);
    }
}

printUserProfile(userProfile); // output: "name: John Doe age: 30 email: JohnDoe@example.com isAdmin: true"

// 2. Updating Inventory     (Hard)

//Explanation: We have an inventory object that holds items as keys and their quantities as values. The function addStock takes two arguments - the original inventory object and a newInventory object. The function updates the quantities of the items in the original inventory based on the new inventory. This helps keep the inventory count updated.

// 3. Filtering Properties:

// Explanation: The filterData function takes an object and a key as parameters and returns an object with only the specified key-value pair. This function can be used when we are only interested in a specific piece of data from an object.

const residency = {
    city: "Brooklyn",
    state: "New York",
    country: "USA",
    zipCode: 11204
};

function filterData(object, key) {
    for (const specificInfo in object) {
        if (specificInfo === key) {
            return `${specificInfo}: ${object[specificInfo]}`;
        }
    }
}

console.log(filterData(residency, "city")); // output: "city: Brooklyn"

// 4. Checking the Perfect Score:

// Explanation: In this problem, we have an array of objects, where each object represents a student and has properties name and score. The perfectScore function checks each student's score and returns true if anyone has a score of 100, otherwise false. This function helps to quickly identify if anyone has achieved the perfect score.

const studentsScore = [
    { name: "John", score: 98 },
    { name: "Jane", score: 100 },
    { name: "Bob", score: 95 }
];

function perfectScore(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score === 100) {
            return true;
        }
    }
    return false;
}

console.log(perfectScore(studentsScore)); // output: true

// 5. Counting Occurrences     (Hard)

// Explanation: The countOccurrence function accepts a string and returns an object where each unique character from the string is a key and its number of occurrences in the string is the value. This function helps to count the frequency of characters in a given string.

let fruit = "apple";
fruit = fruit.split("");

function countOccurrence(str) {
    let result = ``;
    let obj = {};
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i]) {
            count = count + 1;
        }
        result = `${str[i]}: ${count}`;
    }
    return result;
}

console.log(countOccurrence(fruit));

// 6. Calculating Average Score: (Little hard, used help)

//Explanation: In this problem, you are provided an object where each key is a student's name and the corresponding value is an array of their scores. The averageScore function should calculate the average score for each student and return a new object where the keys are the student names and the values are their average scores. This function is useful to analyze the average performance of each student.

const scores = {
    John: [85, 90, 78],
    Jane: [92, 88, 91]
};

function averageScore(scores) {
    const result = {};
    for (const student in scores) {
        const studentScores = scores[student];
        let sum = 0;

        for (const score of studentScores) {
            sum = sum + score;
        }
        const average = sum / studentScores.length;
        result[student] = average.toFixed(2);
    }
    return result;
}

console.log(averageScore(scores));

// 7. Finding Largest Number:

// Explanation: The findLargest function should accept an object where each key-value pair represents a person and their respective age. The function should return the name of the person with the highest age. This is useful to find out who is the oldest among a group of people.

const peopleAndTheirAge = {
    John: 30,
    Jane: 32,
    Bob: 28
};

function findLargest(ages) {
    let largestAge = 0;
    for (const key in ages) {
        if (largestAge < ages[key]) {
            largestAge = ages[key];
        }
    }
    return largestAge;
}

console.log(findLargest(peopleAndTheirAge));

// 8. Reversing Key-Value Pairs:

// Explanation: The reverseKeyValue function takes an object and returns a new object where the keys become values and the values become keys. This can be used when you want to swap the keys and values of an object.

const location = {
    city: "Los Angeles",
    state: "California"
};

function reverseKeyValue(object) {
    let result = {};
    for (const key in object) {
        result = console.log(`"${object[key]}": "${key}"`);
    }
    return result;
}

console.log(reverseKeyValue(location));

// 9. Counting Boolean Values:

// Explanation: The countBooleans function takes an array of boolean values and returns an object that shows the count of true and false values. This function can be used to analyze the distribution of boolean values in a dataset.

const booleanArray = [true, true, false, false, false];

function countBooleans(array) {
    let countTrue = 0;
    let countFalse = 0;
    let bothBooleanCount = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            countTrue = countTrue + 1;
        }
        if (array[i] === false) {
            countFalse = countFalse + 1;
        }
    }
    bothBooleanCount.true = countTrue;
    bothBooleanCount.false = countFalse;
    return bothBooleanCount;
}

console.log(countBooleans(booleanArray));

// 10. Calculating Total Price     (Hard)

// Explanation: You are given an object where each key is an item and its corresponding value is the price. The function calculateTotal takes the object and an array of items and calculates the total price of these items. This function can be used to calculate the total cost of selected items.

let prices = {
    apple: 1,
    banana: 0.5,
    orange: 0.75
};

let items = ["orange", "orange", "banana"];

function calculateTotal(obj, arr) {}
