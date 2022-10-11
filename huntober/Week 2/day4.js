/* write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

Oh, and go ahead and mutate the given array. We're livin' on the wild side! */

function moveUp(array, value) {
    const indexOfArray = array.findIndex(element => element.includes(value))
    
    if(indexOfArray > 0) {
        const indexOfLetter = array[indexOfArray].indexOf(value)
        const temp = array[indexOfArray - 1][indexOfLetter]
        myGrid[indexOfArray - 1][indexOfLetter] = myGrid[indexOfArray][indexOfLetter]
        myGrid[indexOfArray][indexOfLetter] = temp
    }
}

function moveDown(array, value) {
    const indexOfArray = array.findIndex(element => element.includes(value))

    if(indexOfArray < array.length - 1) {
        const indexOfLetter = array[indexOfArray].indexOf(value)
        const temp = array[indexOfArray + 1][indexOfLetter]
        myGrid[indexOfArray + 1][indexOfLetter] = myGrid[indexOfArray][indexOfLetter]
        myGrid[indexOfArray][indexOfLetter] = temp
    }
}

const myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

moveUp(myGrid, "h") // [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]
console.log(myGrid)

moveUp(myGrid, "h") // [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]
console.log(myGrid)

moveUp(myGrid, "h") // [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]
console.log(myGrid)

moveDown(myGrid, "f") // [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]
console.log(myGrid)

moveDown(myGrid, "f") // [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]
console.log(myGrid)