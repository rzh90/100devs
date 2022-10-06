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
        translatedString += replacement[phrase.charAt(i)] || phrase[i]
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

const secretMessage = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
const messageFixedChars = fixChars(secretMessage)
const messageKeyRemoved = removeKey(messageFixedChars)
const messageReversed = reverseMessage(messageKeyRemoved)

console.log(messageReversed)
//console.log(reverseMessage(removeKey(fixChars(secretMessage))))