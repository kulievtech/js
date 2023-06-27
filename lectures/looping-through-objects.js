// create a function that takes an array of student object . {name: "Ali", grades: ["A", "B", "C"]} and return the count who got straight A's

function straightA(arr) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        let student = arr[i];
        if (
            student.grades[0] === "A" &&
            student.grades[1] === "A" &&
            student.grades[2] === "A"
        ) {
            count = count + 1;
        }
    }
    return count;
}

const arr = [
    { name: "John", grades: ["A", "B", "C"] },
    { name: "Smith", grades: ["A", "A", "A"] },
    { name: "Wayne", grades: ["A", "F", "D"] },
    { name: "Rose", grades: ["B", "B", "B"] }
];

console.log(straightA(arr));

// create a function that takes an obj ({name: age}) and return the average age of students.
// input: {Ali: 34, Will: 56, Tom: 43}

function averageAge(obj) {
    let totalAge = 0;
    for (const key in obj) {
        const age = obj[key];
        totalAge = totalAge + age;
    }
    const studentCount = Object.keys(obj).length;

    return totalAge / studentCount;
}

var input = { Ali: 34, Will: 56, Tom: 43 };

console.log(averageAge(input));
