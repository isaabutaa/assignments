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
	if(n === 1) {
		return 1
	}
	return n * factorial(n - 1)
}

// Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
function canNest(arr1, arr2) {
	const arr1Min = Math.min(...arr1)
	const arr1Max = Math.max(...arr1)
	const arr2Min = Math.min(...arr2)
	const arr2Max = Math.max(...arr2)
	return arr1Min > arr2Min && arr1Max < arr2Max
}

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
const dividesEvenly = (a, b) => a % b === 0

// Write a function that takes a positive integer and return its factorial.
const factorial = (z) => z === 0 ? 1 : z * factorial(z - 1)

// Create a function that takes a string and returns a string in which each character is repeated once.
function doubleChar(str) {
	const doubleArr = []
	for(let i = 0; i < str.length; i++) {
		doubleArr.push(str[i] + str[i])
	}
	return doubleArr.join("")
}

// Write a regular expression that matches only an even number. Numbers will be presented as strings
let x = /[02468]$/

// Write a function that converts an object into an array, where each element represents a key-value pair.
const toArray = (obj) => Object.entries(obj)

// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.
function checkFactors(factors, num) {
	return factors.every(factor => num % factor === 0)
}

// Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
function factorial(int) {
	if(int === 0) {
		return 1
	}
	return int * factorial(int - 1)
}

// Create a function that takes an array of numbers and return the first and last elements as a new array.
function firstLast(arr) {
	const newArr = []
	newArr.push(arr[0], arr[arr.length - 1])
	return newArr
}

// Write a function that calculates the nth Fibonacci number
function fib(n) {
	if(n === 0) {
		return 0
	} else if(n === 1) {
		return 1
	}
	return fib(n - 1) + fib(n - 2)
}

// Write a function that takes a string as an argument and returns the left most digit in the string.
const leftDigit = num => {
	const numsArr = /[0,1,2,3,4,5,6,7,8,9]/
	const nums = num.match(numsArr)
	return Number(nums[0])
}

// Given a word, write a function that returns the first index and the last index of a character.
function charIndex(word, char) {
	const arr = word.split("")
	if(arr.includes(char)) {
		return [arr.indexOf(char), arr.lastIndexOf(char)]
	}
}

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
const lessThan100 = (a, b) => a + b < 100 ? true : false

// Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.
const intOrString = (param) => typeof param === "string" ? "str" : "int"

// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.
const additiveInverse = arr => arr.map(el => el * -1)

// Write a function that returns true if there exists at least one number that is larger than or equal to n.
const existsHigher = (arr, n) => arr.some(el => el < n ? false : true)

// Create a function that adds a string ending to each member in an array.
const addEnding = (arr, ending) => arr.map(word => `${word}${ending}`)

// Write a function that maps files to their extension names
const getExtension = arr => arr.map(file => {
	const onlyExtensions = file.split(".")
	return onlyExtensions.pop()
})

// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. 
function evenOddPartition(arr) {
	const evens = []
	const odds = []
	arr.filter(int => int % 2 === 0 ? evens.push(int) : odds.push(int))
	return [evens, odds]
}

// Create a function that filters out an array to include numbers who only have a certain number of digits.
const filterDigitLength = (arr, num) => arr.filter(int => int.toString().length === num)

// An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
const isSpecialArray = (arr) => {
	return arr.every((int, i) => {
		if(i % 2 === 0) {
			return int % 2 === 0
		} else if(i % 2 !== 0) {
			return int % 2 !== 0
		}
	})
}

// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
function getAbsSum(arr) {
	let sum = 0
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] < 0) {
			sum += arr[i] * -1
		} else {
			sum += arr[i]
		}
	}
	return sum
} // Or this way:
function getAbsSum(arr) {
	return arr.reduce((count, num) => count + Math.abs(num), 0)
}

// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items. Create a function that transforms an array into a set. For this question, output an array, not a set.
const set = (arr) => arr.filter((num, i) => {
	return arr.indexOf(num) === i
})

// Create a function that takes width and height and finds the perimeter of a rectangle.
const findPerimeter = (height, width) => (height * 2) + (width * 2)

// Create a function that returns true when num1 is equal to num2.
const isSameNum = (num1, num2) => num1 === num2

// return true if last charact of argument is "n"
const isLastCharacterN = (word) => word[word.length - 1] === "n"

// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
function nSidedShape(n) {
	const shapesObj = {
		1:	"circle",
		2:	"semi-circle",
		3:	"triangle",
		4:	"square",
		5:	"pentagon",
		6:	"hexagon",
		7:	"heptagon",
		8:	"octagon",
		9:	"nonagon",
		10:	"decagon"
	}
	return shapesObj[n]
}

// An overlapped clap is a clap which starts but doesn't finish, as in 'ClaClap' (The first clap is cut chort and there are overall 2 claps)
// Given a string of what the overlapping claps sounded like, return how many claps were made in total.
function countClaps(txt) {
	let count = 0
	for(let i = 0; i < txt.length; i++) {
		if(txt[i] === "C") {
			count += 1
		}
	}
	return count
}

// Count the number of vowels in a string
const countVowels = str => str.match(/[aeiou]/gi).length

// Create a function that takes an array and returns the sum of all numbers in the array.
const getSumOfItems = arr => {
	return arr.reduce((acc, num) => {
		return acc + num
	})
}
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.
const getMultipliedArr = arr => arr.map(num => num * 2)

// Write a function that takes an integer and:
// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
const helloWorld = num => {
	if(num % 3 === 0) {
		if(num % 5 === 0) {
			return "Hello World"
		}
		return "Hello"
	} else {
		return "World"
	}
}

// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
const greaterThanOne = frac => {
	const quotient = eval(frac)
	return quotient > 1 ? true : false
}

// Create a function that flips M's to W's (all uppercase).
function wumbo(words) {
	const wordsArr = words.split("")
	const regex = /M/gi
	return wordsArr.map(el => el.replace(regex, "W")).join("")
}

// Create a function that takes a string and returns a string with spaces in between all of the characters.
function spaceMeOut(str) {
	return str
		.split("")
		.map(char => str.indexOf(char) !== str.length - 1 ? char + " " : char)
		.join("")
}
// another method:
function spaceMeOut(str) {
	return str.split("").join(" ")
}

// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them
function stupidAddition(a, b) {
	if(typeof a === "number" && typeof b === "number") {
		return a.toString() + b.toString()
	} else if(typeof a === "string" && typeof b === "string") {
		return Number(a) + Number(b)
	} else {
		return null
	}
}

// Create a function that returns the ASCII value of the passed in character
const ctoa = c => c.charCodeAt()

// 
function getEquivalent(note) {
	// replace b with # and vice versa
	return note
					.split("")
					.map(el => el === "#" ? "b" : el && el === "b" ? "#" : el)
					.join("")
	// replace letter with new letter
	
}

// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
const maxTotal = nums => {
	const biggestNums = nums.sort((a, b) => a - b).slice(-5)
	return biggestNums.reduce((acc, num) =>  acc += num, 0)
}

// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
function addUpTo(n) {
	let total = 0
	for(let i = 1; i <= n; i++) {
		total += i
	}
	return total
}

// John is playing a dice game. The rules are as follows:
// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!
// Create a function which takes in a matrix as input, and return John's score after his game has ended.

const diceGame = matrix => {
	if(matrix.find(arr => arr[0] === arr[1])) {
		return 0
	}
	return matrix.reduce((acc, arr) => {
		let sum = 0
		arr.forEach(num => sum += num)
		return acc += sum
	}, 0)
}