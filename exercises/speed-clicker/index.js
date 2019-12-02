
const redBox = document.getElementById("red-box")

let counter = 0
redBox.addEventListener('click', (event) => {
    event.preventDefault()
    const counterDiv = document.getElementById("counter")
    counter ++
    counterDiv.textContent = "Total clicks: " + counter
})