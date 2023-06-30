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

let oldInv = {
    apple: 10,
    orange: 5
};
let newInv = {
    apple: 5,
    banana: 10
};

function addStock(inventory, newInventory) {
    for (let item in newInventory) {
        if (inventory[item] !== undefined) {
            // little confused about the syntax here
            inventory[item] += newInventory[item];
        } else {
            inventory[item] = newInventory[item];
        }
    }
    return inventory;
}

console.log(addStock(oldInv, newInv)); // output: { apple: 15, orange: 5, banana: 10 }

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

let string = "Banana";

function countOccurrence(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        // we could loop through strings the same way we loop through arrays? I Did not know that!
        const char = str[i];
        if (count[char]) {
            // are we using for in loop?
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;
}

console.log(countOccurrence(string)); // output: { B: 1, a: 3, n: 2 }

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

console.log(averageScore(scores)); // output: { John: '84.33', Jane: '90.33' }

// 7. Finding Largest Number:

// Explanation: The findLargest function should accept an object where each key-value pair represents a person and their respective age. The function should return the name of the person with the highest age. This is useful to find out who is the oldest among a group of people.

const peopleAndTheirAge = {
    John: 30,
    Jane: 32,
    Bob: 28
};

function findLargest(ages) {
    let oldestPerson = "";
    let largestAge = 0;
    for (const key in ages) {
        if (largestAge < ages[key]) {
            largestAge = ages[key];
            oldestPerson = key;
        }
    }
    return oldestPerson;
}

console.log(findLargest(peopleAndTheirAge)); // output: "Jane"

// 8. Reversing Key-Value Pairs:

// Explanation: The reverseKeyValue function takes an object and returns a new object where the keys become values and the values become keys. This can be used when you want to swap the keys and values of an object.

const location = {
    city: "Los Angeles",
    state: "California"
};

function reverseKeyValue(object) {
    let reversed = {};
    for (const key in object) {
        reversed[object[key]] = key;
    }
    return reversed;
}

console.log(reverseKeyValue(location)); // output: { 'Los Angeles': 'city', California: 'state' }

// 9. Counting Boolean Values:

// Explanation: The countBooleans function takes an array of boolean values and returns an object that shows the count of true and false values. This function can be used to analyze the distribution of boolean values in a dataset.

const booleanArray = [true, true, true, true, false, false, false];

function countBooleans(array) {
    let countTrue = 0;
    let countFalse = 0;
    let bothBooleanCount = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            countTrue = countTrue + 1;
        } else if (array[i] === false) {
            countFalse = countFalse + 1;
        }
    }
    bothBooleanCount.true = countTrue;
    bothBooleanCount.false = countFalse;
    return bothBooleanCount;
}

console.log(countBooleans(booleanArray)); // output: true: 4, false: 3

// 10. Calculating Total Price     (Hard)

// Explanation: You are given an object where each key is an item and its corresponding value is the price. The function calculateTotal takes the object and an array of items and calculates the total price of these items. This function can be used to calculate the total cost of selected items.

let prices = {
    apple: 1,
    banana: 0.5,
    orange: 0.75,
    cherry: 2,
    berry: 3
};

let items = ["orange", "orange", "banana", "cherry", "berry"];

function calculateTotal(obj, arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const item = items[i];
        total = total + obj[item]; // We could actually use this syntax without using for in loop?
    }
    return total;
}

console.log(calculateTotal(prices, items)); // output: 7
