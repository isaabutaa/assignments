const readline = require("readline-sync")
const input = readline.question('What phrase would you like to encrypt? \n').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? \n'));

// create a function that will loop through the string and shift the characters up or down a certain number of times

let cipheredString = ""
function cipher(string, num){
    for(let i = 0; i < string.length; i++){
        if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
            let code = string.charCodeAt(i)
            code -= 97
            code = (code + num) % 26
            code += 97
            cipheredString += String.fromCharCode(code)
        } else {
            cipheredString += string[i]
        }
    }
    return cipheredString
}

console.log(cipher(input, shift))

// SERR PBQR PNZC!

// we're using lowercase letters, so the letters are between ascii numbers 97 and 122
// spaces and characters are outside of that range, so we can do an else statement for those 
// how can I the function dynamic? the user can shift the letters any number of times up or down, so how can I make it so no matter which number they choose, the result will be correct?
    // can I make it so if the ascii code is above 122, it just starts back at 97? And if the ascii code is less than 97, it counts down from 122?
    
// let cipheredString = ""
// function cipher(string){
//     const charCode = string.charCodeAt()
//     for(let i = 0; i < string.length; i++){
//         if(charCode >= 97 && charCode <= 109){
//             cipheredString += String.fromCharCode(charCode + shift)
//         } else if(charCode >= 110 && charCode <= 122){
//             cipheredString += String.fromCharCode(charCode - shift)
//         } else {
//             cipheredString += string[i]
//         }
//     }
//     return cipheredString
// }

// console.log(cipher(input))