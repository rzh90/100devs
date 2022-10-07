/*
 create a function that swaps each letter of the alphabet for its opposite

'A'  // first letter of the alphabet, uppercase
'z'  // last letter of the alphabet, lowercase

'p'  // 16th letter of the alphabet, lowercase
'K'  // 16th letter from *end* of alphabet, uppercase

'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// function replaces letters with opposites
'Example: 0 number or punctuation changes'
*/

function replaceWithOpposite(phrase) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const alphabetReverse = "abcdefghijklmnopqrstuvwxyz".split("").reverse()
    const alphabetKey = {}
    for(let i = 0; i < alphabet.length; i++) {
        alphabetKey[alphabet[i]] = alphabetReverse[i]
        alphabetKey[alphabet[i].toUpperCase()] = alphabetReverse[i].toUpperCase()
    }
    
    const letters = phrase.split("")
    const replacedLetters = letters.map(element => element = element in alphabetKey ? alphabetKey[element] : element)

    return replacedLetters.map(element => element = (element == element.toLowerCase()) ? element.toUpperCase() : element.toLowerCase()).join("")
}
 

const string = "vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH"
console.log(replaceWithOpposite(string))