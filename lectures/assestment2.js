// create a function that takes an array of students ages enrolled into bootcamp. Find and return the average age of the students.

// 24,23,18,50:    24+23+18+50,    115 / 4 = 28.75

function average(studentsAge) {
    let sum = 0;
    for (let i = 0; i < studentsAge.length; i++) {
        let age = studentsAge[i];
        sum = sum + age;
    }
    let averageAge = sum / studentsAge.length;
    return averageAge;
}

console.log(average([24, 23, 18, 50]));
