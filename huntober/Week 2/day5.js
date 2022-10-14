//create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, shuffle away!
function shuffleArrayOriginal(array) {
    for(let i = 0; i < array.length; i++) {
        let tempIndex = Math.floor(Math.random() * array.length)
        let temp = array[i]
        array[i] = array[tempIndex]
        array[tempIndex] = temp
    }
    return array
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const someArray = [["Daisy", "Jemma", "Yoyo"], ["Meldina", "Phil", "Leo"]]
console.log(shuffleArray(someArray))