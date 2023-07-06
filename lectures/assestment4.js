// simple loop example

const inventory = {
    Math: 1000,
    Biology: 2000,
    Astronomy: 500,
    Russian: 200
};

console.log(Object.keys(inventory)); // output: [ 'Math', 'Biology', 'Astronomy', 'Russian' ]
console.log(Object.values(inventory)); // output: [ 1000, 2000, 500, 200 ]

let totalBooks = 0;

for (const key in inventory) {
    totalBooks = totalBooks + inventory[key];
    console.log(`We have ${inventory[key]} in ${[key]}`);
}

console.log(totalBooks);

// return all the keys from the object and put those keys inside the array.

function subjectsKeys(books) {
    const keys = [];
    for (const subject in books) {
        keys.push(subject);
    }
    return keys;
}

console.log(subjectsKeys(inventory)); // output: [ 'Math', 'Biology', 'Astronomy', 'Russian' ]

// create a function that return values from an object inside the array.

function subjectsValues(books) {
    const values = [];
    for (const subject in books) {
        values.push(books[subject]);
    }
    return values;
}

console.log(subjectsValues(inventory)); // output: [ 1000, 2000, 500, 200 ]

// create a function that takes an object({name: age}) and return the average age of students.
// input: {Ali: 34, Will: 56, Tom: 43}

let object = {
    Ali: 34,
    Will: 56,
    Tom: 43
};

function averageAge(obj) {
    let totalAge = 0;
    for (const key in obj) {
        totalAge = totalAge + obj[key];
    }
    const studentCount = Object.keys(obj).length;
    return totalAge / studentCount;
}

console.log(averageAge(object)); // output: 44.333333333333336
