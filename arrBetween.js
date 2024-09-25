/* 
    write a function that receives 2 numbers (low and high) and an array.
    It should return an array containing the numbers that lie between the two numbers (low and high).
*/

function arrayBetween(low, high, array) {
    // this is the array we must populate with valid numbers
    let results = []

    // loop through each number in array
    for (let i = 0; i < array.length; i++) {
        // check each number - it should be higher than "low", and lower than "high"
        
        console.log(array[i]) // check the number we're working with

        // check the current number is bigger than low and smaller than high
        if (array[i] > low && array[i] < high) {
            // if it is, add it to the results array
            results.push(array[i])
        }
    }

    // return the array with all the valid numbers
    return results
}

console.log(arrayBetween(3, 8, [1, 4, 5, 7, 10])) // test our function
console.log(arrayBetween(1, 10, [1, 4, 25, 17, 100])) // test our function
console.log(arrayBetween(1000, 2000, [1001, 4000, 5000, 1750, -10])) // test our function

// with arrow function + iterator method (higher order function)
const arrayBetween2 = (low, high, array) => array.filter((item) => item > low && item < high)

console.log(arrayBetween2(3, 8, [1, 4, 5, 7, 10]))
console.log(arrayBetween2(1, 10, [1, 4, 25, 17, 100]))
console.log(arrayBetween2(1000, 2000, [1001, 4000, 5000, 1750, -10]))

console.log("done")