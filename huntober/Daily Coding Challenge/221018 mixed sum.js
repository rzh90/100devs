/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

from https://www.codewars.com/kata/57eaeb9578748ff92a000009*/

function sumMix(array) {
    const numberArray = array.map((element) => Number(element))
    return numberArray.reduce((accumulator, value) => accumulator + value, 0)
}
