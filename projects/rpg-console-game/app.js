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
    inventory:[""]
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

function willProceed(){
    const willProceed = ["yes", "no"]
    const playerAnswer = readline.keyInSelect(willProceed, "Will you proceed to your tournament match?")
    if(playerAnswer === 0) {
        console.log("Hold your head up high, and good luck!")
        enemyGenerator()
    }
}

function atkPtsGenerator(){
    return Math.ceiling(Math.random() * player.maxAttackPoints) 
}

function dfnsePtsGenerator(){
    return Math.ceiling(Math.random() * player.maxDefensePoints)
}

function evadeAttack(){
    return Math.floor(Math.random(4))
}

function landAttack(){
    return Math.floor(Math.random(2))
}

function whatsYourMove(){
    const battleMoves = ["Attack","Evade"]
    const playerMove = readline.keyInSelect(battleMoves, "It's your move. What will you choose?")

    if(playerMove === 0){
        landAttack()
            if(landAttack() === 1){
                Enemy.healthPoints -= atkPtsGenerator()
            } else {
                console.log("You missed!")
            }
    }
}


function Enemy(weapon, healthPoints, maxAttackPoints, maxDefensePoints){
    this.name = player.name,
    this.weapon = weapon,
    this.healthPoints = healthPoints,
    this.maxAttackPoints = maxAttackPoints,
    this.maxDefensePoints = maxDefensePoints
}

function enemyGenerator(){

    function maxEnemyAttack(){
        if(weaponSelected === 0){
            Enemy.maxAttackPoints = 15
        } else if(weaponSelected === 1){
            Enemy.maxAttackPoints = 10
        } else if(weaponSelected === 2){
            Enemy.maxAttackPoints = 20
        } else if(weaponSelected === 3){
            Enemy.maxAttackPoints = 7
        } else if(weaponSelected === 4){
            Enemy.maxAttackPoints = 10
        } else if(weaponSelected === 5){
            Enemy.maxAttackPoints = 17
        } else if(weaponSelected === 6){
            Enemy.maxAttackPoints = 13
        } else{
            Enemy.weaponEquipped = "bare hands"
            Enemy.maxAttackPoints = 25
        }
    }

    function maxEnemyDefense(){
        if(armourSelected === 0){
            Enemy.maxDefensePoints = 9
        } else if(armourSelected === 1){
            Enemy.maxDefensePoints = 7
        } else if(armourSelected === 2){
            Enemy.maxDefensePoints = 13
        } else if(armourSelected === 3){
            Enemy.maxDefensePoints = 18
        } else if(armourSelected === 4){
            Enemy.maxDefensePoints = 21
        } else {
            Enemy.armourEquipped = "bare skin"
            Enemy.maxDefensePoints = 25
        }
    }
    const enemy1 = new Enemy(weaponChoices[Math.floor(Math.random() * 6)], 100, maxEnemyAttack(), maxEnemyDefense())
    const enemy2 = new Enemy(weaponChoices[Math.floor(Math.random() * 6)], 100, maxEnemyAttack(), maxEnemyDefense())
    const enemy3 = new Enemy(weaponChoices[Math.floor(Math.random() * 6)], 100, maxEnemyAttack(), maxEnemyDefense())
    const enemy4 = new Enemy(weaponChoices[Math.floor(Math.random() * 6)], 100, maxEnemyAttack(), maxEnemyDefense())
    const enemy5 = new Enemy(weaponChoices[Math.floor(Math.random() * 6)], 100, maxEnemyAttack(), maxEnemyDefense())

    const enemies = [enemy1, enemy2, enemy3, enemy4, enemy5]

    for(let i = 0; i < enemies.length; i++){
        if(enemies[Math.floor(Math.random() * 5)]){
            console.log("Your opponent is " + enemies[Math.floor(Math.random() * 5)] + ". Their stats are:\n", enemies[Math.floor(Math.random() * 5)])

        }
    }
}

while(!gameOver && crystalsInPossession < 5){
    willProceed()
}