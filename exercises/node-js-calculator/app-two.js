const readline = require("readline-sync")

const userName = readline.question("Hello, User. My name is ComputerTron. What is your name? \n")

console.log("It is a pleasure to meet you, " + userName + ".")

const firstNumber = Number(readline.question("Let me show you a trick. First, give me a number value, and press Enter. \n"))

const secondNumber = Number(readline.question("Wonderful. I love the number " + firstNumber + ". Now, please give me a second number. \n"))

const mathOperators = ["Add", "Subtract", "Multiply", "Divide"]

const operatorChoice = readline.keyInSelect(mathOperators, "Excellent. Now, from the above choices, I want you to choose the math operation that you would like to perform with these two numbers:")

const operationMath = function(){
    if(mathOperators[operatorChoice] === "Add"){
        console.log("Oh how lovely! I love to add numbers. The answer to your math operation is " + firstNumber + secondNumber + ".")
    } else if (mathOperators[operatorChoice] === "Subtract"){
        console.log("Oh how lovely! I love to subtract numbers. The answer to your math operation is " + firstNumber - secondNumber + ".")
    } else if (mathOperators[operatorChoice] === "Multiply"){
        console.log("Oh how lovely! I love to multipluy numbers. The answer to your math operation is " + firstNumber * secondNumber + ".")
    } else if(mathOperators[operatorChoice] === "Divide"){
        console.log("Oh how lovely! I love to divide numbers. The answer to your math operation is " + firstNumber / secondNumber + ".")
    } else {
        console.log("Goodbye then, " + userName + ". Until we meet again...")
    }
}

operationMath()