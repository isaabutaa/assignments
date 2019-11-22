const readline = require("readline-sync")

console.log("Muwahahahaha! Welcome to my Escape Room. If you're lucky, you will escape. If not, you will die. Muwahahahaha!")

var escapeOptions = ["Put hand in hole", "Find the key", "Open the door"]

var userOptions = readline.keyInSelect(escapeOptions, "Let me tell you your options. Your first option: Put your hand in the hole in the wall. Your second option: Find the key. Your third option: Open the door! Beware, not all options will bring you your freedom. Muwahahahaha!" )



// var userChoice = function(){
//     if(escapeOptions[userOptions] === "Put hand in hole") {
//         console.log("You didnt know that this hole has a deadly snake in it, but now you do! You are DEAD. Try again!")
//         continue
//     } else if(escapeOptions[userOptions] === "Find the key") {
//         console.log("That is a wise decision, my friend. Now ")
//     }
// }