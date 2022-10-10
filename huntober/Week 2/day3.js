/* write a function that takes in a given array of strings and move any entries containing the letter 'a' to the front, and then move any entries that have over 3 characters to the back. Please preserve the order of things while you do this!

Example:
myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// move things around
=> ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy'] */

function moveFrontAndBack(array) {
    return array.filter(element => element.toLowerCase().includes("a")) // string contains "a"
                .concat(array.filter(element => element.length <= 3 && !element.toLowerCase().includes("a"))) // string 3 characters or less
                .concat(array.filter(element => element.length > 3 && !element.toLowerCase().includes("a"))) // string over 3 characters
}

let myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
//should return ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

console.log(moveFrontAndBack(myArr))