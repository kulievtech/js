// function isValidEmail(email) {
//     let mainArr = [];
//     if (email.includes("@")) {
//         mainArr = email.split("@");
//     }
//     let domainArr = [];
//     if (mainArr[1].includes(".")) {
//         domainArr = mainArr[1].split(".");
//     }
//     let countAtSign = 0;
//     if (email.includes("@")) {
//         countAtSign = countAtSign + 1;
//     }
//     if (countAtSign !== 1) {
//         return false;
//     }
//     if (email.startsWith(".", "_") || email.endsWith(".", "_")) {
//         return false;
//     }
//     let countDotSign = 0;
//     if(domainArr)
// }

// console.log(isValidEmail("helloworld123@gmail.com"));

function isValidEmail(email) {
    // Check if the email string contains exactly one "@" symbol. If not, return false.
    if (email.split("@").length !== 2) {
        return false;
    }

    // Split the email string into username and domain.
    var parts = email.split("@");
    var username = parts[0];
    var domain = parts[1];

    // Perform necessary checks on the username.
    if (
        !/^[a-zA-Z0-9._]+$/.test(username) ||
        username.startsWith(".") ||
        username.endsWith(".") ||
        username.startsWith("_") ||
        username.endsWith("_") ||
        username.includes("..") ||
        username.includes("__")
    ) {
        return false;
    }

    // Check if the domain string contains exactly one "." symbol. If not, return false.
    if (domain.split(".").length !== 2) {
        return false;
    }

    // Split the domain into domain name and domain extension.
    var domainParts = domain.split(".");
    var domainName = domainParts[0];
    var domainExtension = domainParts[1];

    // Perform necessary checks on the domain.
    if (
        !/^[a-zA-Z]+$/.test(domainName) ||
        !/^[a-zA-Z]+$/.test(domainExtension)
    ) {
        return false;
    }

    return true;
}

console.log(isValidEmail("ello123@gmail.com"));
