// string methods practice exercise

// Make a function that will return any given string into all caps followed by the same string all lowercase.

function capitalizeAndLowercase(string) {
    return string.toUpperCase() + string.toLowerCase()
}

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

const findMiddleIndex = (string) => {
    return Math.floor(string.length / 2)
}

// Make a function that uses slice() and the other functions you've written to return the first half of the string

const returnFirstHalfOfString = (string) => {
    return string.slice(0, string.length / 2)
}

const returnLastHalfOfString = (str) => {
    console.log(str.slice(str.length / 2, str.length))
}

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

const highAndLow = (string) => {
    return (string.slice(0, string.length / 2).toUpperCase()) + (string.slice(string.length / 2, string.length))
}

// help on this question
// Make a function that takes any string and capitalizes any character that follows a space

const capitalFirstLetter = (string) => {
    let splitString = string.split(' ')
    for(let i = 0; i < splitString.length; i++){
        (splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1))
    }
    splitString.join(" ") //this is where the problem is I think
    return splitString
}
// console.log(capitalFirstLetter("hey friends! practice practice practice!"))


// array methods practice

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.

vegetables.pop()
console.log("vegetables arr:", vegetables)

// Remove the first item from the fruit array.

fruit.splice(0,1)
console.log("fruit arr:", fruit)

// Find the index of "orange."

console.log(fruit.indexOf("orange"))

// Add that number to the end of the fruit array.

console.log(fruit.push(1))
console.log(fruit)

// Use the length property to find the length of the vegetable array.

console.log(vegetables.length)

// Add that number to the end of the vegetable array.

console.log(vegetables.push(3))

// Put the two arrays together into one array. Fruit first. Call the new Array "food".

const food = fruit.concat(vegetables)
console.log("food arr: ",food )
// Remove 2 elements from your new array starting at index 4 with one method.

food.splice(4,2)
console.log("food arr after splice: ", food)

// Reverse your array.

food.reverse()
// Turn the array into a string and return it.
food.toString()
console.log(food)