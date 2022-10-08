// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

function removeXChar(string, number) {
    let letters = string.split("")
    for(let i = number - 1; i < string.length; i += number) {
        letters[i] = ""
    }
    return letters.join("")
}

const string = "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
console.log(removeXChar(string, 4))
const string2 = "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
console.log(removeXChar(string2, 5))