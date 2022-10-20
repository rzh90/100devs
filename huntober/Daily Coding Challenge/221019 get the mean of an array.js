/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

from https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript
*/

/*
function takes in array of numbers
    -array will never be empty

function returns number
    -average of the numbers in array
    -number is rounded down to nearest integer
*/

function getAverage(array) {
    // sum = reduce to get sum of array
    const sum = array.reduce((accumulator, value) => accumulator + value, 0)
    // average = divide sum by length of array
    const average = sum / array.length
    // return average
    return Math.floor(average)
}

console.log(getAverage([2,2,2,2])) // 2
console.log(getAverage([1,2,3,4,5,])) // 3
console.log(getAverage([1,1,1,1,1,1,1,2])) // 1
