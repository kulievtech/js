// number 3

function checkValue(arr, num) {
    if (arr.includes(num)) {
        return true;
    } else {
        return false;
    }
}

var arr = [1, 2, 3, 4, 5];
var num = 3;

var result = arr.includes(num);

console.log(result);
