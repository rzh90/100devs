function fixChars(phrase) {
    const replacement = {
        "O": "0",
        "I": "1",
        "Z": "2",
        "E": "3",
        "h": "4",
        "S": "5",
        "G": "6",
        "L": "7",
        "B": "8",
        "q": "9",
        "0": "O",
        "1": "I",
        "2": "Z",
        "3": "E",
        "4": "h",
        "5": "S",
        "6": "G",
        "7": "L",
        "8": "B",
        "9": "q"
    }

    let translatedString = ""
    for(let i = 0; i < phrase.length; i++) {
        translatedString += replacement[phrase[i]] || phrase[i]
    }
    return translatedString
}

function removeKey(message) {
    const key = /[Space]/g
    return message.replace(key, ' ')
}

function reverseMessage(message) {
    return message.split("").reverse().join("")
}

function removeXChar(string, number) {
    let letters = string.split("")
    for(let i = number - 1; i < string.length; i += number) {
        letters[i] = ""
    }
    return letters.join("")
}

function replaceWithOpposite(phrase) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const alphabetReverse = "abcdefghijklmnopqrstuvwxyz".split("").reverse()
    const alphabetKey = {}
    for(let i = 0; i < alphabet.length; i++) {
        alphabetKey[alphabet[i]] = alphabetReverse[i]
        alphabetKey[alphabet[i].toUpperCase()] = alphabetReverse[i].toUpperCase()
    }
    
    const letters = phrase.split("")
    const replacedLetters = letters.map(letter => letter in alphabetKey ? alphabetKey[letter] : letter)

    return replacedLetters.map(letter => letter == letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join("")
}

const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
const messageFixedChars = fixChars(encryptedMsg)
const messageKeyRemoved = removeKey(messageFixedChars)
const messageReversed = reverseMessage(messageKeyRemoved)
const reversedMessage = removeXChar(messageReversed, 3)
const finalMessage = replaceWithOpposite(reversedMessage)

console.log(finalMessage)
console.log(replaceWithOpposite(removeXChar(reverseMessage(removeKey(fixChars(encryptedMsg))), 3)))