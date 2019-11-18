//Array methods exercise

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.

console.log(vegetables.pop())
console.log('vegetables:', vegetables)

// Remove the first item from the fruit array.

console.log(fruit.shift())
console.log('fruit:', fruit)

// Find the index of "orange."

console.log(fruit.indexOf('orange'))

// Add that number to the end of the fruit array.

fruit.push(1)
console.log('fruit:', fruit)

// Use the length property to find the length of the vegetable array.

console.log('vegetable arr length:', vegetables.length)

// Add that number to the end of the vegetable array.

vegetables.push(3)
console.log(vegetables)

// Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat(vegetables)
console.log('food:', food)

// Remove 2 elements from your new array starting at index 4 with one method.

console.log(food.splice(4,2))
console.log(food)
// Reverse your array.

var reversedFoodArr = food.reverse()
console.log('reversed food:', reversedFoodArr)

// Turn the array into a string and return it.

console.log(reversedFoodArr.join(', '))
