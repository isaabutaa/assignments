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

const weapons = ["Battle-Axe", "Long Sword", "Mace", "Twin Hook Swords", "Danish Axe"]

const userWeapon = readline.keyInSelect(weapons, "The above choices are weapons available to choose from. You may only have one, so choose wisely.")

let userAttackPoints = 0

const userWeaponFunc = () => {
    if(weapons[userWeapon] === "Battle-Axe") {
        userAttackPoints += 15
        console.log("You have chosen the " + weapons[userWeapon] + ". Your attack points have increased to " + userAttackPoints + ".")
    } else if(weapons[userWeapon] === "Long Sword"){
        userAttackPoints += 13
        console.log("You have chosen the " + weapons[userWeapon] + ". Your attack points have increased to " + userAttackPoints + ".")
    } else if(weapons[userWeapon] === "Mace") {
        userAttackPoints += 17
        console.log("You have chosen the " + weapons[userWeapon] + ". Your attack points have increased to " + userAttackPoints + ".")
    } else if(weapons[userWeapon] === "Twin Hook Swords"){
        userAttackPoints += 20
        console.log("You have chosen the " + weapons[userWeapon] + ". Your attack points have increased to " + userAttackPoints + ".")
    } else if(weapons[userWeapon] === "Danish Axe") {
        userAttackPoints += 14
        console.log("You have chosen the " + weapons[userWeapon] + ". Your attack points have increased to " + userAttackPoints + ".")
    } else {
        userAttackPoints += 5
        console.log("Planning on just using your bare knuckles? Very well. Your attack points have increased to " + userAttackPoints + ".")
    }
}

userWeaponFunc()

let gameOver = false
let userHP = 100
let enemy0neHP = 50
let enemyTwoHP = 100
let enemyThreeHP = 150

userMove = ["Attack","Evade"]

while(!gameOver) {
    const roundOne = readline.keyInSelect(userMove, "ROUND ONE: Your first opponent is one of the Urukai from Lord of the Rings. He is 8 ft. tall, wears thick armor forged in the fires of Isengard. You have the first move: \n")
    if(user)
}