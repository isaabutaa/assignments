
// let factor = 2

// function multiply(num) {
//     return num * factor
// }

// function setFactor(newFactor) {
//     factor = newFactor
// }

// module.exports = { multiply, setFactor}

let factor = 5

function multiplyByFactor(num) {
    return num * factor
}

function setFactor(newFactor) {
    factor = newFactor
}

module.exports = {multiplyByFactor, setFactor}