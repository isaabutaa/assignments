const baddieForm = document["baddie-form"]

baddieForm.addEventListener("submit", function(event){
    event.preventDefault()
    const coinsForGoombas = Number(baddieForm["goombas-squashed"].value) * 5
    const coinsForBobBombs = Number(baddieForm["bob-bombs-squashed"].value) * 7
    const coinsForCheepCheeps = Number(baddieForm["cheep-cheeps-squashed"].value) * 11
    const totalCoins = coinsForGoombas + coinsForBobBombs + coinsForCheepCheeps
    let grandTotal = 0
    grandTotal += totalCoins
    // 1. create element that will display the result of coins owed to Mario
    const coinsH3 = document.createElement("h3")

    // 2. edit the <h3></h3> element
    coinsH3.textContent = "Peach owes Mario a total of " + grandTotal + " coins!"
    coinsH3.className = "total-coins-h3"

    // 3. Append coinsH3 to the DOM -- append it to the div with a class of "coins-list"
    const coinsList = document.getElementById("coins-list")
    coinsList.appendChild(coinsH3)
    console.log(coinsH3)
})