/* twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

-If the given value is on the edge of the array and can't move in that direction, don't move it.
-The array passed in should be mutated by this function. Scandalous, I know. */

function moveLeft(array, element) {
    const elementIndex = array.indexOf(element)
    if(elementIndex != 0) {
        let temp = array[elementIndex - 1]
        array[elementIndex] = temp
        array[elementIndex - 1] = element
    }
}

function moveRight(array, element) {
    const elementIndex = array.indexOf(element)
    if(elementIndex != array.length - 1) {
        let temp = array[elementIndex + 1]
        array[elementIndex] = temp
        array[elementIndex + 1] = element
    }
}

myArray = ['abc', 'xyz', 1, 2, 'Hey!']
console.log(myArray)

// call move left function with 'xyz' and myArray as arguments
moveLeft(myArray, "xyz")
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
moveLeft(myArray, "xyz")
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
moveRight(myArray, 2)
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
moveRight(myArray, 2)
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change