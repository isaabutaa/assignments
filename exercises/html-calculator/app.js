// assign variables to each form
var sum = document.sum
// assign variable to the div in which the answer of the addition form will populate
// var additionAnswer = document.getElementById("addition-answer")

// access the input information from the inputs in each form


// addEventListeners for buttons that calculate the final value
//get button element by id
var addBtn = document.getElementById("add-button")
addBtn.addEventListener('click', function (e){
    e.preventDefault()
    var firstSumInput = Number(sum.firstSumInput.value)
    var secondSumInput = Number(sum.secondSumInput.value)
    var inputPlusInput = firstSumInput + secondSumInput
    //create new element inside the addition-answer div
    var finalAnswer = document.createElement("div")
    finalAnswer.className = "final-answer"
    //tell the finalAnswer div to contain the text content that will be the answer
    finalAnswer.textContent = "Here's your answer! : " + inputPlusInput
    sum.appendChild(finalAnswer)
})



// multiplication form
var product = document.product
//addEventListener and function to calculate the product
var multiplyBtn = document.getElementById('multiply-button')
multiplyBtn.addEventListener("click",function(e){
    e.preventDefault()
    //assign variables to the input fields in the form
    var firstProductInput = Number(product.firstProductInput.value)
    var secondProductInput = Number(product.secondProductInput.value)
    //assign variable to the final product
    var finalProduct = firstProductInput * secondProductInput
    //create div element that will contain the final value, and giv the div a class for styling purposes
    var productContainer = document.createElement("div")
    productContainer.className = "product-container"
    //alter textContent of productContainer to include the text of the answer and any additional text
    productContainer.textContent = "Here's your answer! : " + finalProduct
    //append productContainer to product form
    product.appendChild(productContainer)
    
})



//subtraction form
var remainder = document.remainder
// set button to variable for addEventListener
var subtractBtn = document.getElementById("subtract-button")
//addEventListener
subtractBtn.addEventListener("click",function(e){
    e.preventDefault()
    //assign variables to input values
    var firstRemainderInput = Number(remainder.firstRemainderInput.value)
    var secondRemainderInput = Number(remainder.secondRemainderInput.value)
    //assign variable to the remainder of first and secondRemainderInputs
    var finalRemainder = firstRemainderInput - secondRemainderInput
    //create div element that will later be appended to the remainder/subtract form, give the div a class for styling purposes
    var remainderContainer = document.createElement("div")
    remainderContainer.className = "remainder-container"
    //modify textContent of remainderContainer - it will include the value of finalRemainder and any other additional text
    remainderContainer.textContent = "Here's your answer! : " + finalRemainder
    //append the div remainderContainer to the remainder form
    remainder.appendChild(remainderContainer)
})