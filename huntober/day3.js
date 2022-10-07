// replace any instances of any of the key characters in a given string with an empty space (' ')

function removeKey(message) {
    const key = /[AKEY_!]/g
    return message.replace(key, ' ')
}

const string = 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
console.log(removeKey(string))