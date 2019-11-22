var readline = require("readline-sync")

// console.dir(readline)

console.log("Hello, user. I am the supreme program of the internet. I will ask you a few questions, and you will answer.")

var userName = readline.question("Tell me, what is your name? ")
console.log("It is wonderful to meet you " + userName + ".")

var firstNumber = Number(readline.question("Please enter a number value. "))

var secondNumber = Number(readline.question("Wonderful, your first number is " + firstNumber + ". Now enter a second number. "))

var mathOperations = ["add", "subtract", "multiply", "divide"]

var mathChoice = readline.keyInSelect(mathOperations, "Now please choose the math operation that you would like to perform with " + firstNumber + " and " + secondNumber + ".")

var mathAnswer = function() {
    if(mathOperations[mathChoice] === "add"){
        return firstNumber + secondNumber
    } else if(mathOperations[mathChoice] === "subtract") {
        return firstNumber - secondNumber
    } else if(mathOperations[mathChoice] === "multiply") {
        return firstNumber * secondNumber
    } else if (mathOperations[mathChoice] === "divide") {
        return firstNumber / secondNumber
    } else {
        break
    }
}

console.log("The answer to your math operation is " + mathAnswer())



