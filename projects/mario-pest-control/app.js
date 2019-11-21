var baddieContainer = document.getElementById("baddie-rate-container")
var squashedContainer = document.getElementById("squashedContainer")
// pull the elements from the DOM that contain the number inputs
// these will be used to calculate the total number of coins that Peach owes Mario

// first, create a button variable and then addEventListener for "click", and then begin function
var submitBtn = document.getElementById("submit-num-squashed")
submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    // third step: for each of the forms, create variables, then create variables inside the forms that will save the input values
    //goombas for and input
    var goombas = document.goombasForm
    var goombasSquashed = Number(goombas.value) * 5
    goombas.appendChild(goombasSquashed)
    //bobombs form and input
    var bobombs = document.bobombsForm
    var bobombsSquashed = Number(bobombs.value) * 7
    bobombs.appendChild(bobombsSquashed)
    //cheep-cheeps form and input
    var cheeps = document.cheepsForm
    var cheepsSquashed = Number(cheeps.value) * 11
    cheeps.appendChild(cheepsSquashed)
    // fourth step: create a variable that will contain the final value of the inputs
    var totalSquashed = goombas + bobombs + cheeps

    //fifth step: create an element that will contain the total in text, add textContent
    var totalCoins = document.createElement("div")
    totalCoins.textContent = "Peach owes Mario: " + totalSquashed + " coins!"
    squashedContainer.appendChild(totalCoins)
})

// second step: getElementsByClassName
// var squashedArr = document.getElementsByClassName("squashed")

