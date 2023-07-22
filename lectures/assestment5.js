const str = "hello";

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

console.log(str.reverse());
