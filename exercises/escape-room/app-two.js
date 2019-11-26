const readline = require("readline-sync")

const yesOrNo = ["Yes, I will proceed.", "No, I will not sacrifice my life"]

const userChoice = readline.keyInSelect(yesOrNo, "Hello User. You have entered the TOURNAMENT OF DEATH. In this tournament, mistakes are fatal. Will you proceed? Answer 'yes', or 'no.' \n")

let userName
const noChoice = () => {
    if(yesOrNo[userChoice] === "Yes, I will proceed.") {
        userName = readline.question("Very well. Now, tell me, what is your name? \n")
    } else {
        userName = readline.question("Unfortunately, you can only proceed forward. Tell me, what is your name? \n")
    }
}

noChoice()

console.log("Good luck, " + userName + ". You will either be remembered as a hero, or as a coward. The choice is yours.")

const weapons = ["Battle-Axe", "Long Sword", "Mace", ]

const userWeaponChoice = readline.keyInSelect(weapons, "The above choices are weapons available to choose from. You may only have one, so choose wisely.")