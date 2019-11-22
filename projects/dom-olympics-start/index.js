//header

var headerDiv = document.getElementById("header")

var header = document.createElement("h1")
header.classList.add("header")
header.textContent = "JavaScript Made This!!"

headerDiv.appendChild(header)

var subtitle = document.createElement("h5")
// subtitle.className = "name"
subtitle.innerHTML = '<span class = "name"> Isa </span> wrote the JavaScript'

header.appendChild(subtitle)

// change messaging text
// getElementsByClassName
var messages = document.getElementsByClassName("message")
// change the text content of each index of the array by using bracket notation and textContent
messages[0].textContent = "Hey Scott, what do you think is the likelihood that we'll be able to transfer our consciousness to robots in the future?"

messages[1].textContent = "You know, Isa, that's a great question. It's neat to think about, but I think it's very unlikely."

 messages[2].textContent = "Yeah... I see what you're saying. I do think it'd be possible to upload our 'likeness' into a robot or computer in the future. Like... You could collect a bunch of date about your speech and mannerisms and the sound of your voice, but transferring your actual living essence to a computer does seem pretty unlikely. I mean, how do you even measure a person's essence?"

messages[3].textContent = "Those are my thoughts exactly."

//set variable name to clear button and do an addEventListener that will clear the text when clicked
var clearBtn = document.getElementById("clear-button")
clearBtn.addEventListener("click", function(e){
    e.preventDefault
    //create a loop that will loop through the messages and clear them
    for(var i = 0; i < messages.length; i++){
        messages[i].textContent = ''
    }
})

//themes
var themeDropDown = document.getElementById("theme-drop-down")
themeDropDown.addEventListener("change", function(e){
    e.preventDefault()
    for(var i = 0; i < messages.length; i++){
        messages[i].classList.toggle("theme-three")
    }
})