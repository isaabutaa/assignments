//Create a function that returns the index of the first vowel in a string.
function firstVowel(str) {
	const lowerStr = str.toLowerCase()
	for(let i = 0; i < lowerStr.length; i++){
		if(lowerStr[i] === "a" || lowerStr[i] === "e" || lowerStr[i] === "i" || lowerStr[i] === "" || lowerStr[i] === "u"){
			return lowerStr.indexOf(lowerStr[i])
		}
	}
}

// Write a function that returns true if two rooks can attack each other, and false otherwise.
// Two rooks can attack each other if they share the same row (letter) or column (number).
function canCapture([yourRook, opponentsRook]) {
	if(yourRook.charAt(0) === opponentsRook.charAt(0) || yourRook.charAt(1) === opponentsRook.charAt(1)) {
		return true
	} else {
		return false
	}
}

// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
const bitwiseAND = (n1, n2) => n1 & n2

const bitwiseOR = (n1, n2) => n1 | n2

const bitwiseXOR = (n1, n2) => n1 ^ n2

// Given the radius and height of a pizza, calculate the volume
const volPizza = (radius, height) => Math.round(Math.pow(radius, 2) * height * Math.PI)

// Create a function that takes an array of numbers. Return the largest number in the array.
function findLargestNum(arr) {
	const sortedArr = arr.sort((a,b) => {
		return a - b
	})
	return sortedArr[sortedArr.length - 1]
}

// Write a function that transforms all letters from [a,m] to 0 and letters from [n,z] to 1 in a string.
function convertBinary(str) {
	const lowStr = str.toLowerCase()
	let binaryStr = ""
	for(let i = 0; i < lowStr.length; i++) {
		if(lowStr[i].charCodeAt() >= 97 && lowStr[i].charCodeAt() <= 109) {
			binaryStr += "0"
		} else {
			binaryStr += "1"
		}
	}
	return binaryStr
}

// Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".
// If the number is a multiple of 3 the output should be "Fizz".
// If the number given is a multiple of 5, the output should be "Buzz".
// If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
// If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below
function FizzBuzz(num) {
	if(num % 3 === 0) {
		if(num % 3 === 0 && num % 5 === 0) {
			return "FizzBuzz"
		}
		return "Fizz"
	} else if(num % 5 === 0) {
		return "Buzz"
	} else {
		return num.toString()
	}
}

// Create a function that takes in a date and returns the correct century.
function century(year) {
	if(year <= 2000){
		return `${Math.ceil(year / 100)}th century`
	} else {
		return `${Math.ceil(year / 100)}st century`
	}
}
	// OR this solution using ES6 and ternary syntax:
	const century = year => year <= 2000 ? `${Math.ceil(year / 100)}th century` : `${Math.ceil(year / 100)}st century`

// Write a function that calculates the factorial of a number recursively
function factorial(n) {
	if(n === 1 || n === 0) {
		return 1
	}
	return n * factorial(n - 1)
}

