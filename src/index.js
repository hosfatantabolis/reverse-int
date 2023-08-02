module.exports = function reverse (n) {
 return parseInt(String(Math.abs(n)).split("").reverse().join(""));
}
