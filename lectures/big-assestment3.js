// Problem 1

/*
  Write a function that will print the name of all the students
  Example:
  printNames(students1)
  Mike
  Sarah
  Jessica
  */

function printNames(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name);
    }
}

let students1 = [{ name: "Mike" }, { name: "Sarah" }, { name: "Jessica" }];

printNames(students1);

// Problem 2

/*
  Write a function that will print the name and id of all the students
  Example:
  printStudents(students2)
  Mike is student #0
  Sarah is student #1
  Jessica is student #2
  */
let students2 = [
    {
        name: "Mike",
        id: 0
    },
    {
        name: "Sarah",
        id: 1
    },
    {
        name: "Jessica",
        id: 2
    }
];

function printStudents(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(`${students[i].name} is student #${students[i].id}`);
    }
}

printStudents(students2);

// Problem 3

/*
  Write a function that will print the name of the student and their highest test score
  Example:
  printBestGrade(students3)
  Mike 84
  Sarah 100
  Jessica 92
  */
let students3 = [
    {
        name: "Mike",
        id: 0,
        grades: [
            { id: 0, score: 84 },
            { id: 1, score: 20 },
            { id: 2, score: 80 }
        ]
    },
    {
        name: "Sarah",
        id: 1,
        grades: [
            { id: 0, score: 62 },
            { id: 1, score: 56 },
            { id: 2, score: 100 }
        ]
    },
    {
        name: "Jessica",
        id: 2,
        grades: [
            { id: 0, score: 79 },
            { id: 1, score: 92 },
            { id: 2, score: 93 }
        ]
    }
];

function printBestGrade(students) {
    for (let i = 0; i < students.length; i++) {
        let highestScore = students[i].grades[0].score;
        for (let j = 0; j < students[i].grades.length; j++) {
            if (highestScore < students[i].grades[j].score) {
                highestScore = students[i].grades[j].score;
            }
        }
        // if (highestScore < students[i].grades[1].score) {
        //     highestScore = students[i].grades[1].score;
        // }
        // if (highestScore < students[i].grades[2].score) {
        //     highestScore = students[i].grades[2].score;
        // }
        console.log(`${students[i].name} ${highestScore} `);
    }
}

printBestGrade(students3);

// Problem 4
/*
  Write a function that will print the name of the student and their average test score
  Example:
  printAverageGrade(students3)
  Mike 61.333333333333336
  Sarah 72.66666666666667
  Jessica 73.33333333333333
  */
let students4 = [
    {
        name: "Mike",
        id: 0,
        grades: [
            { id: 0, score: 84 },
            { id: 1, score: 20 },
            { id: 2, score: 80 }
        ]
    },
    {
        name: "Sarah",
        id: 1,
        grades: [
            { id: 0, score: 62 },
            { id: 1, score: 56 },
            { id: 2, score: 100 }
        ]
    },
    {
        name: "Jessica",
        id: 2,
        grades: [
            { id: 0, score: 79 },
            { id: 1, score: 92 },
            { id: 2, score: 49 }
        ]
    }
];

function printAverageGrade(students) {
    for (let i = 0; i < students.length; i++) {
        // let averageScore = (students[i].grades[0].score + students[i].grades[1].score + students[i].grades[2].score) / 3;
        let sumOfEachGrade = 0;
        for (let j = 0; j < students[i].grades.length; j++) {
            sumOfEachGrade = sumOfEachGrade + students[i].grades[j].score;
        }
        let averageScore = sumOfEachGrade / students[i].grades.length;
        console.log(`${students[i].name} ${averageScore}`);
    }
}

printAverageGrade(students4);

/* ------------------------------------------------------------------- */

// Problem 5
// Create the data object that this function is expecting

/*
Example:
printUsers(users1)
0: UserName1
1: UserName2
...and so forth, for all the users
*/

let users1 = [
    { id: 0, username: "Smith1998" },
    { id: 1, username: "John1983" },
    { id: 3, username: "Frank2001" }
];

function printUsers(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(`${user.id}: ${user.username}`);
    }
}
printUsers(users1);

// Problem 6
//Create the data object that this function is expecting

/*
  Example:
  printUsersWebsites(users2)
  ~~UserName1~~
    -siteName1
    -siteName2
  ~~UserName2~~
    -siteName3
    -siteName4
    -siteName5
  ...and so forth, for all the users
  */

let users2 = [
    {
        username: "Oliver1978",
        sites: [
            { url: "www.walmart.com" },
            { url: "www.target.com" },
            { url: "www.doordash.com" }
        ]
    },
    {
        username: "David1987",
        sites: [
            { url: "www.canva.com" },
            { url: "www.zoom.com" },
            { url: "www.github.com" }
        ]
    },
    {
        username: "Jack2002",
        sites: [
            { url: "www.youtube.com" },
            { url: "www.facebook.com" },
            { url: "www.google.com" }
        ]
    }
];

function printUsersWebsites(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(`~~${user.username}~~`);
        for (let j = 0; j < user.sites.length; j++) {
            let site = user.sites[j];
            console.log(`  -${site.url}`);
        }
    }
}
printUsersWebsites(users2);

//Problem 7
//Create the data object that this function is expecting
/*
  Example:
  printUsersWebsitesInfo(users3)
  ~~UserName1~~
    -siteName1.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
    -siteName2.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
  ~~UserName2~~
    -siteName3.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
    -siteName4.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
    -siteName5.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
  ...and so forth, for all the users
  */

let users3 = [
    {
        username: "UserName1",
        sites: [
            { url: "siteName1.com", load: "21%", userCount: 210000, pop: 32 },
            { url: "siteName2.com", load: "21%", userCount: 210000, pop: 32 },
            { url: "siteName3.com", load: "21%", userCount: 210000, pop: 32 },
            { url: "siteName4.com", load: "21%", userCount: 210000, pop: 32 },
            { url: "siteName5.com", load: "21%", userCount: 210000, pop: 32 },
            { url: "siteName6.com", load: "21%", userCount: 210000, pop: 32 }
        ]
    }
];

function printUsersWebsitesInfo(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(`~~${user.username}~~`);
        for (let j = 0; j < user.sites.length; j++) {
            let site = user.sites[j];
            console.log(`  -${site.url}`);
            console.log(`    -load: ${site.load}%`);
            console.log(`    -# of users: ${site.userCount}`);
            console.log(`    -popularity score: ${site.pop}`);
        }
    }
}

printUsersWebsitesInfo(users3);

//Problem 8 (BONUS)

//Write a function that will print the id of each test and the name of the student
//who got the highest scores

//Example

// Test 0: Anthony
// Test 1: Pawandeep
// Test 2: Winnie

let students32 = [
    {
        name: "Anthony",
        id: 0,
        grades: [
            { id: 0, score: 84 },
            { id: 1, score: 20 },
            { id: 2, score: 80 }
        ]
    },
    {
        name: "Winnie",
        id: 1,
        grades: [
            { id: 0, score: 62 },
            { id: 1, score: 56 },
            { id: 2, score: 100 }
        ]
    },
    {
        name: "Pawandeep",
        id: 2,
        grades: [
            { id: 0, score: 79 },
            { id: 1, score: 92 },
            { id: 2, score: 49 }
        ]
    }
];
function printBestStudent(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(`Test ${students[i].id}: ${students[i].name}`);
    }
}

printBestStudent(students32);
