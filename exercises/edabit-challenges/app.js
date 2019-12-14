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