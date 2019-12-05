
// redbox event handler
const redBox = document.getElementById("red-box")
let counter = 0
const counterDiv = document.getElementById("counter")
redBox.addEventListener('click', (event) => {
    event.preventDefault()
    
    counter ++
    counterDiv.textContent = "Total clicks: " + counter
})



//bluebox event handler
const blueBox = document.getElementById("blue-box")
blueBox.addEventListener('click', () => {
    const timerDiv = document.getElementById("timer")
    
    let seconds = 10
    const countSeconds = () => {
        seconds --
        timerDiv.textContent = "Countdown timer: " + seconds
    }
    
    const stopSeconds = () => {
        clearInterval(intervalID)
        // session storage
    localStorage.setItem("counter",counter)
    let totalClicks = localStorage.getItem("counter")
    }
    
    const intervalID = setInterval(countSeconds, 1000)
    setTimeout(stopSeconds, 10000)
    
    blueBox.remove()
})



// const sayHello = () => console.log("hello")
// const stopHello = () => clearInterval(intervalID)
// const intervalID = setInterval(sayHello, 1000)
// setTimeout(stopHello, 16000)
