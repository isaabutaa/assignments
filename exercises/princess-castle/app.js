
let gameActive

class Player {

    constructor (name, status, totalCoins, hasStar) {
        this.name = name
        this.status = status
        this.totalCoins = totalCoins
        this.hasStar = hasStar
    }
    
    gotHit() {
        if(this.status === "Powered Up"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Small"
        } else if(this.status === "Small"){
            clearInterval(marioInterval)
            console.log("You died! GAMEOVER")
            !gameActive
        }
    }

    gotPowerUp() {
        if(this.status === "Small"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Powered Up"
        } else if(this.status === "Powered Up"){
            console.log("Nice Job! You got a Star!")
            this.hasStar = "You have a Star"
        }
    }

    gameActive = true

    addCoin() {
        this.totalCoins ++
    }

    print() {
        console.log(`\nName: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n`)
    }
}

const mario = new Player("Mario", "Big", 0)
mario.print()
const marioInterval = setInterval(() => {
    if((Math.floor(Math.random() * 3)) === 0){
        mario.gotHit()
        mario.print()
    } else if((Math.floor(Math.random() * 3)) === 1){
        mario.gotPowerUp()
        mario.print()
    } else if((Math.floor(Math.random() * 3)) === 2){
        mario.addCoin()
        mario.print()
    }
    return Math.floor(Math.random() * 3)
}, 1000)


