// apply the principles of helper functions and self-documenting code to this mess of a code snippet below. Take time to play with the function, find out what is going on, and make improvements

function compareDates1(date1, date2) {
    const currentDate = new Date()
    const daysToDateA = Math.ceil(Math.abs(currentDate.getTime() - date1.getTime()) / (1000*60*60*24))
    const daysToDateB = Math.ceil(Math.abs(currentDate.getTime() - date2.getTime()) / (1000*60*60*24))

    const dateA = date1.toDateString()
    const dateB = date2.toDateString()

    if (daysToDateA * 2 <= daysToDateB) {
        return `If you thought ${dateA} was a long wait, wait until you see how long it is until ${dateB}.`
    } else if (daysToDateA < daysToDateB) {
        return `Don't worry, ${dateB} isn't too much farther away than ${dateA} in the scheme of things.`
    } else if (daysToDateA === daysToDateB) {
        return `They're the same number of days away!`
    } else {
        return `You know ${dateA} is closer, right?`
    }
}

function compareDates2(date1, date2) {
    const currentDate = new Date()
    const daysToDateA = Math.ceil(Math.abs(currentDate.getTime() - date1.getTime()) / (1000*60*60*24))
    const daysToDateB = Math.ceil(Math.abs(currentDate.getTime() - date2.getTime()) / (1000*60*60*24))

    const dateA = date1.toDateString()
    const dateB = date2.toDateString()
    const timesFurther = Math.floor(daysToDateB/daysToDateA)

    if (daysToDateA < daysToDateB) {
        return `Looks like ${dateB} is ${timesFurther} times farther away than ${dateA}.`
    } else if (daysToDateA === daysToDateB) {
        return `Same exact date there, mate.`
    } else {
        return `Looks like ${dateA} is ${timesFurther} times farther away than ${dateB}.`
    }
}

function daysCountdown(date1, date2) {
    const currentDate = new Date()
    const daysToDateA = Math.ceil(Math.abs(currentDate.getTime() - date1.getTime()) / (1000*60*60*24))
    const daysToDateB = Math.ceil(Math.abs(currentDate.getTime() - date2.getTime()) / (1000*60*60*24))
    const dateA = date1.toDateString()
    const dateB = date2.toDateString()
    const numDaysBetween = daysToDateB - daysToDateA

    return `You have ${daysToDateA} days left until ${dateA}, and ${daysToDateB} days left until ${dateB}. There are ${numDaysBetween} days between them.`
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022,09,26)
const dateB = new Date(2022,11,25)

console.log(daysCountdown(dateA, dateB))