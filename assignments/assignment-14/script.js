// part 1

function numbers() {
    for (var i = 11; i <= 99; i = i + 1) {
        console.log(i);
    }
}

// part 2

function numbersDiv7() {
    for (var i = 6; i <= 76; i = i + 1) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
}

// part 3

function numbersDiv3And7() {
    for (var i = 1; i <= 99; i = i + 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

// part 4

function sqrt20And40() {
    for (var i = 20; i <= 40; i = i + 1) {
        console.log(Math.sqrt(i));
    }
}

// part 5

// function divByNumber() {
//     for (var i = 1; i <= 99; i = i + 1) {
//         if (i % 3 === 0 || (i % 5 === 0 && i % 3 !== 0 && i % 5 !== 0)) {
//             console.log(i);
//         }
//     }
// }

function divByNumber() {
    for (var i = 1; i <= 99; i = i + 1) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            console.log(i);
        }
    }
}
