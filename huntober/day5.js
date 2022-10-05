/******************
Here are the rules these submissions had to follow:
-No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
-Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
-Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
-The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
-Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
-Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
-Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
-Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
******************/

/*** FUCTIONS ***/
// No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
function checkEmpty(showName) {
    return !showName.startsWith(" ")
}

// Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
function containsCanine(showName) {
    const showNameLower = showName.toLowerCase()
    return !showNameLower.includes("dog") && !showNameLower.includes("bone") && !showNameLower.includes("bark")
}

// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
function lengthNotFive(showName) {
    return showName.length % 5 != 0
}

// The sum of the charCodes of the 1st and last characters must be odd
function charCodeOdd(showName) {
    return ((showName.charCodeAt(0) + showName.charCodeAt(showName.length - 1)) % 2) != 0
}

// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
function middleNotE(showName) {
    const middle = Number.isInteger(showName.length / 2) ? (showName.length / 2) : Math.floor(showName.length / 2)
    return showName[middle + 1].toLowerCase() != "e"
}

// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
function evenLowerCase(showName) {
    let totalLower = 0
    for(let i = 0; i < showName.length; i++) {
        if(/[A-Za-z]/.test(showName[i]) && showName[i] === showName[i].toLowerCase())
            totalLower++
    }
    return totalLower % 2 == 0
}

// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
function twoCapitalLetters(showName) {
    let totalCaps = 0
    for(let i = 0; i < showName.length; i++) {
        if(/[A-Za-z]/.test(showName[i]) && showName[i] === showName[i].toUpperCase())
            totalCaps++
    }
    return totalCaps >= 2
}

// Must not contain a capital 'S'
function noCapS(showName) {
    return !showName.includes("S")
}

/*** CHALLENGE ***/
const submissions = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

const showTitles = submissions.split(",")

const titlesNotEmpty = showTitles.filter(element => checkEmpty(element))
const titlesNoCanine = titlesNotEmpty.filter(element => containsCanine(element))
const titlesLengthNotFive = titlesNoCanine.filter(element => lengthNotFive(element))
const titlesCharCodeOdd = titlesLengthNotFive.filter(element => charCodeOdd(element))
const titlesMiddleNotE = titlesCharCodeOdd.filter(element => middleNotE(element))
const titlesEvenLower = titlesMiddleNotE.filter(element => evenLowerCase(element))
const finalTitles = titlesEvenLower.filter(element => twoCapitalLetters(element))

console.log(finalTitles)
console.log(`final count is ${finalTitles.length}`)