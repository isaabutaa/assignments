
///// redbox event handler
const redBox = document.getElementById("red-box")
const counterDiv = document.getElementById("counter")

let counter
if(localStorage.counter){
    counter = localStorage.counter
} else {
    counter = 0
}
counterDiv.textContent = "Total clicks: " + counter

/////bluebox event handler
const blueBox = document.getElementById("blue-box")
blueBox.addEventListener('click', () => {
    const timerDiv = document.getElementById("timer")
    console.log("bluebox")
    let seconds = 10
    const countSeconds = () => {
        seconds --
        timerDiv.textContent = "Countdown timer: " + seconds
    }
    // set and clear interval
    const intervalID = setInterval(countSeconds, 1000)
    const stopSeconds = () => {
        clearInterval(intervalID)
        localStorage.setItem("counter",counter)
        redBox.removeEventListener("click",addClick)
    }
    setTimeout(stopSeconds, 10000)
    
    blueBox.remove()
    
    function addClick() {
        console.log("hello")
        counterDiv.textContent = "Total clicks: " + counter
        counter ++
    }
    redBox.addEventListener('click',addClick)
})