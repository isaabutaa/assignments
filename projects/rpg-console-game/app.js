const readline = require("readline-sync")

///// Greet the player, and give them some context for what's happening in the world around them. Why are they there? What do they need to try and do? /////

console.log("\n\nHello, Player. You have been transported to an alternate dimension against your will in order to compete in a multi-universe tournament. Your opponents are no ordinary foes -- they are, in fact, alternate versions of yourself. All of you have significant skills and experiences to build upon which may help you triumph, but only one version of you can win. And only one version of yourself can return home and live out the rest of your life. In order to win and return home, you must gather 5 time-and-space crystals, which will be awarded to you one at a time at the conclusion of each tournament match, but only if you win.\n\nAre you ready?\n\nLet's begin!")


///// Get the player's information, and save it to an object. /////

const player = {
    name: "",
    age: null,
    healthPoints: 100,
    weaponEquipped: "",
    armourEquipped: "",
    inventory:{crystalsInPossession: 0}
}

player.name = readline.question("\nWhat is your name?\n\n")
player.age = readline.question("\nHow old are you, " + player.name +"?\n\n")

///// Let the player choose a weapon, and armour. The weapon will give them attack points, and the armour will subtract from enemy attack points. /////

const weaponChoices = ["Danish axe", "Blacksmith hammer", "Twin-hook swords", "Brass knuckles", "Butcher knife", "Longsword", "Bow and Arrows"]
const weaponSelected = readline.keyInSelect(weaponChoices, "Equip yourself with one of these deadly weapons.", {cancel: "My bare hands!"})
player.weaponEquipped = weaponChoices[weaponSelected]

const armourChoices = ["iron chainmail", "leather", "steel plate armour", "mithril", "dragon scales"]
const armourSelected = readline.keyInSelect(armourChoices, "Now, choose a type of armour.",{cancel: "No armour - my skin is as hard as a diamond!"})
player.armourEquipped = armourChoices[armourSelected]

///// give player maxAttackPoints and maxDefensePoints based on the weapon and armor they chose /////

// maxAttackPoints
function maxAttack(){
    if(weaponSelected === 0){
        player.maxAttackPoints = 15
    } else if(weaponSelected === 1){
        player.maxAttackPoints = 10
    } else if(weaponSelected === 2){
        player.maxAttackPoints = 20
    } else if(weaponSelected === 3){
        player.maxAttackPoints = 7
    } else if(weaponSelected === 4){
        player.maxAttackPoints = 10
    } else if(weaponSelected === 5){
        player.maxAttackPoints = 17
    } else if(weaponSelected === 6){
        player.maxAttackPoints = 13
    } else{
        player.weaponEquipped = "bare hands"
        player.maxAttackPoints = 25
    }
}
maxAttack()

// maxDefensePoints
function maxDefense(){
    if(armourSelected === 0){
        player.maxDefensePoints = 9
    } else if(armourSelected === 1){
        player.maxDefensePoints = 7
    } else if(armourSelected === 2){
        player.maxDefensePoints = 13
    } else if(armourSelected === 3){
        player.maxDefensePoints = 18
    } else if(armourSelected === 4){
        player.maxDefensePoints = 21
    } else {
        player.armourEquipped = "bare skin"
        player.maxDefensePoints = 25
    }
}
maxDefense()

console.log("\nPlayer stats:\n\n", player)
 
 /////////////////////////////////// 
///// Game-deciding variables /////

let gameOver = false
let crystalsInPossession = 0
 
 //////////////////////////
///// Game functions /////

// function willProceed(){
//     const willProceed = ["yes", "no"]
//     const playerAnswer = readline.keyInSelect(willProceed, "Will you proceed to your tournament match?")
//     if(playerAnswer === 0) {
//         console.log("Hold your head up high, and good luck!")
//         enemyGenerator()
//     }
// }

function atkPtsGenerator(){
    return Math.floor(Math.random() * player.maxAttackPoints) 
}

function dfnsePtsGenerator(){
    return Math.floor(Math.random() * player.maxDefensePoints)
}

function enemyAtkPtsGenerator(){
    return Math.floor(Math.random() * enemy.maxAttackPoints)
}

function enemydfnsePtsGenerator(){
    return Math.floor(Math.random() * enemy.maxDefensePoints)
}

function evadeAttack(){
    return Math.floor(Math.random(4))
}

function landAttack(){
    return Math.floor(Math.random() * 2)
}

function whatsYourMove(){
    const battleMoves = ["Attack","Evade"]
    const playerMove = readline.keyInSelect(battleMoves, "It's your move. What will you choose?")

    if(playerMove === 0){
        landAttack()
            if(landAttack() > 0){
                enemy.healthPoints -= atkPtsGenerator()
                if(enemy.healthPoints > 0){
                    console.log("\nYou landed your attack! Your enemy's health is now:\n ", enemy.healthPoints)
                    console.log("\nNow, it's your enemies turn...")
                    landAttack()
                    if(landAttack() > 0){
                        player.healthPoints -= enemyAtkPtsGenerator()
                        if(player.healthPoints > 0){
                            console.log("The enemy attacked! Your health is now:\n", player.healthPoints)
                        } else {
                            console.log("\nYou have been defeated. GAMEOVER")
                            gameOver = true
                        }
                    } else {
                        console.log("The enemy missed! It's your turn again.\n")
                    }
                } else {
                    console.log("\nYou defeated your enemy! For winning your match, you have received one time-and-space crystal to add to your inventory.\nNow, prepare for your next match!")
                    player.inventory.crystalsInPossession += 1
                    if(player.healthPoints <= 50){
                        console.log("\nYour enemy left behind some food with certain healing properties. You got 50 extra health points!")
                        player.healthPoints += 50
                    }
                }
            } else {
                console.log("\nYou missed! Now it's the enemy's turn. Get ready!\n")
                landAttack()
                if(landAttack() > 0){
                    player.healthPoints -= enemyAtkPtsGenerator()
                    if(player.healthPoints > 0){
                        console.log("The enemy attacked! Your health is now:\n", player.healthPoints)
                    } else {
                        console.log("\nYou have been defeated. You will be trapped here for eternity. GAMEOVER")
                        gameOver = true
                    }
                } else {
                    console.log("The enemy missed! It's your turn again.\n")
                }
            }
    } else if(playerMove === 1){
        // ...
    }
}

let enemy
function enemyGenerator(){
    function Enemy(weapon, healthPoints, maxAttackPoints = 15, maxDefensePoints = 15){
        this.name = "other".concat(player.name.toUpperCase()),
        this.weapon = weapon,
        this.healthPoints = healthPoints,
        this.maxAttackPoints = maxAttackPoints,
        this.maxDefensePoints = maxDefensePoints
    }
    enemy = new Enemy(weaponChoices[Math.floor(Math.random() * 6)], Math.floor(Math.random() * 100))
    console.log("Your opponent's stats are: \n", enemy)
}


 ////////////////////
///// The Game /////

while(!gameOver && player.inventory.crystalsInPossession < 5){
    const willProceed = ["yes", "view my stats"]
    const playerAnswer = readline.keyInSelect(willProceed, "Will you proceed to your tournament match?\n", {cancel:"quit game - I can't handle this"})
    if(playerAnswer === 0){
        console.log("\nHold your head up high, and good luck!\n")
        enemyGenerator()
            while(enemy.healthPoints > 0 && player.healthPoints > 0){
                whatsYourMove()
                if(player.inventory.crystalsInPossession === 5){
                    console.log("\nIt seems you have retrieved enough space-and-time crystals to return home. You are the lucky one. Cherish those you love and enjoy the remaining days of your life.\n\nYou are transported back home, but still, you wonder... Was that real?")
                    gameOver = true
                } 
            }
    } else if(playerAnswer === 1) {
        console.log("Player stats:\n", player)
    } else {
        console.log("\nYou have forfeited your right to return home. You will be trapped here for eternity. GAMEOVER.")
        gameOver = true
    }
}