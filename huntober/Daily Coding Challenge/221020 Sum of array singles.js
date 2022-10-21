/* You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

from https://www.codewars.com/kata/59f11118a5e129e591000134 */

/*
function takes in array of numbers
    -two numbers occur once
    -other numbers occur twice

returns number
    -sum of 2 numbers that occur once
*/

function repeats(array) {
    // filter array with numbers whose first index does not = last index
    const singleNumbers = array.filter(number => array.indexOf(number) == array.lastIndexOf(number))
    // return sum of 2 numbers in array
    const sum = singleNumbers[0] + singleNumbers[1]
    return sum
}

console.log(repeats([4,5,7,5,4,8])) // 15
console.log(repeats([9, 10, 19, 13, 19, 13])) // 19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])) // 12
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])) // 22
console.log(repeats([5, 10, 19, 13, 10, 13])) // 24
