const readline = require("readline-sync")

console.log("Muwahahahaha! Welcome to my Escape Room. If you're lucky, you will escape. If not, you will die. Muwahahahaha!")

var userName = readline.question("Tell me, poor soul, what is your name? ")

var escapeOptions = ["Put hand in hole", "Find the key", "Open the door"]


var findKey = false
var gameOver = false
var disableElectricShock = false

while(!gameOver){
var userOptions = readline.keyInSelect(escapeOptions, "Let me tell you your options, " + userName + ". Your first option: Put your hand in the hole in the wall. Your second option: Find the key. Your third option: Open the door! Beware, not all options will bring you your freedom. Muwahahahaha!" )
    if(escapeOptions[userOptions] === "Put hand in hole"){
        console.log("You didnt know that this hole had a deadly venomous snake in it, but now you do! You are DEAD. GAME OVER")
        gameOver = true
    } else if(escapeOptions[userOptions] === "Open the door") {
        if(findKey === true){
            console.log("So you escaped? I promise you, if you return again, " + userName +  ", you will not be so lucky!")
            gameOver = true
        } else if(!disableElectricShock) {
            console.log("At this moment, you wish you knew that in order to disable the deadly electric shock on the door, you first needed the key. You are DEAD. GAMEOVER")
            gameOver = true
        }
    } else if(escapeOptions[userOptions] === "Find the key") {
        console.log("Aaah, it seems you found the key for the door. Now you can open the door.")
        findKey = true
        disableElectricShock = true
        }
    }


    // console.log("If you put your hand in the hole, you learned that it has a venomous snake nested inside of it. You are DEAD. If you chose to open the door, you now know that first, you must find the key. Hurry and choose again before your time runs out!")



// var userChoice = function(){
//     if(escapeOptions[userOptions] === "Put hand in hole") {
//         console.log("You didnt know that this hole has a deadly snake in it, but now you do! You are DEAD. Try again!")
//         continue
//     } else if(escapeOptions[userOptions] === "Find the key") {
//         console.log("That is a wise decision, my friend. Now ")
//     }
// }

