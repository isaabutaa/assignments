//header////////////////////////////////////////////////////////////////////////////

var headerDiv = document.getElementById("header")

var header = document.createElement("h1")
header.classList.add("header")
header.textContent = "JavaScript Made This!!"

headerDiv.appendChild(header)

var subtitle = document.createElement("h5")
// subtitle.className = "name"
subtitle.innerHTML = '<span class = "name"> Isa </span> wrote the JavaScript'

header.appendChild(subtitle)

// change messaging text///////////////////////////////////////////////////////////
// getElementsByClassName
var messages = document.getElementsByClassName("message")
// change the text content of each index of the array by using bracket notation and textContent
messages[0].textContent = "Hey Scott, what do you think is the likelihood that we'll be able to transfer our consciousness to robots in the future?"

messages[1].textContent = "You know, Isa, that's a great question. It's neat to think about, but I think it's very unlikely."

messages[2].textContent = "Yeah... I see what you're saying. I do think it'd be possible to upload our 'likeness' into a robot or computer in the future. Like... You could collect a bunch of data about your speech and mannerisms and the sound of your voice, but transferring your actual living essence to a computer does seem pretty unlikely. I mean, how do you even measure a person's essence?"

messages[3].textContent = "Those are my thoughts exactly."

for(let i = 0; i < messages.length; i++){
    
    messages[i].style.borderRadius = "25px"
    
    if(i % 2 === 0){
        messages[i].classList.add("right")
    } else {
        messages[i].classList.add("left")
    }
}

// Clear the text////////////////////////////////////////////////////////////////

//set variable name to clear button and do an addEventListener that will clear the text when clicked
var clearBtn = document.getElementById("clear-button")
clearBtn.addEventListener("click", function(e){
    e.preventDefault
    //create a loop that will loop through the messages and clear them
    for(var i = 0; i < messages.length; i++){
        messages[i].textContent = ''
    }
})

// Apply the themes from the drop-down menu///////////////////////////////////////

//themes
var themeDropDown = document.getElementById("theme-drop-down")
themeDropDown.addEventListener("change", function(e){
    e.preventDefault()
    for(var i = 0; i < messages.length; i++){
        if(themeDropDown.value === "theme-one"){
            if(i % 2 ===0){
                messages[i].style.backgroundColor = "blue"
                messages[i].style.color = "white"
            } else {
                messages[i].style.backgroundColor = "brown"
                messages[i].style.color = "white"
            }
        } else if(themeDropDown.value === "theme-two"){
            if(i % 2 === 0){
                messages[i].style.backgroundColor = "red"
                messages[i].style.color = "white"
            } else {
                messages[i].style.backgroundColor = "black"
                messages[i].style.color = "white"
            }
        } else if(themeDropDown.value === "theme-three"){
            if(i % 2 === 0){
                messages[i].style.backgroundColor = "blue"
                messages[i].style.color = "white"
            } else {
                messages[i].style.backgroundColor = "green"
                messages[i].style.color = "white"
            }
        } else {
            messages[i].style.backgroundColor = "white"
            messages[i].style.color = "black"
        }
    }
})

// Add new messages to the already existing conversation///////////////////////////

// create a new div in which the new messages will appear

const messageForm = document.message
const messageInput = document.getElementById("input")
const messagesContainer = document.getElementsByClassName("messages")


 messageForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newMessage = document.createElement("div")
    newMessage.className = "new-message"
    newMessage.textContent = messageInput.value 
    messagesContainer[0].appendChild(newMessage)
 })


