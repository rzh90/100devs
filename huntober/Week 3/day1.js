/*
simplify the example function below based on what we've discussed today

function myExampleFunction(arr) {
    if (arr != null) {
        if (arr.length !== 0) {
            if (arr[0].length !== 0) {
                if (arr.length > 10) {
                    arr.push('maximum')
                } else if (arr.length === 10) {
                    arr.push('maximum')
                } else {
                    if (arr[0] === 'must be maximum') {
                        arr.push('failure')
                    } else if (arr[0] === 'flexible') {
                        arr.push('success')
                    }
                }
            }
        }
    }
    return arr
}
*/

function myExampleFunction(arr) {
    if (arr == null && arr.length == 0)
        return arr

    if (arr.length >= 10)
        arr.push('maximum')
    else if (arr[0] === 'must be maximum')
        arr.push('failure')
    else if (arr[0] === 'flexible')
        arr.push('success')

    return arr
}

console.log(myExampleFunction([]))

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(myExampleFunction(array))

const array2 = ["must be maximum"]
console.log(myExampleFunction(array2))

const array3 = ["flexible"]
console.log(myExampleFunction(array3))

const array4 = ["Daisy", "May", "Jemma"]
console.log(myExampleFunction(array4))