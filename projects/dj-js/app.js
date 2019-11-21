var body = document.getElementsByTagName("body")

var header = document.createElement("h1")
header.className = "header"
header.innerHTML = "<span class = 'dj-isa'> DJ Isa </span> is in the House! Get ready y'all!"
header.style.textAlign = "center"
// .dj-isa.style.color = "firebrick"


var flashingBox = document.createElement("div")
flashingBox.className = "flashing-box"
flashingBox.style.height = "300pt"
flashingBox.style.width = "300pt"
flashingBox.style.backgroundColor = "black"
flashingBox.style.margin = "auto"
flashingBox.style.position = "relative"
flashingBox.style.top = "150pt"


document.body.appendChild(header)
document.body.appendChild(flashingBox)
// body.appendChild(flashingBox)


// Event Listeners

// 1
function mouseFunc(){
    if(flashingBox.style.backgroundColor === "black"){
        flashingBox.style.backgroundColor = "blue"
    } else {
        flashingBox.style.backgroundColor = "black"
    }
}

flashingBox.addEventListener("mouseover", mouseFunc)

// 2
function operationMouseDown(){
    if(flashingBox.style.backgroundColor !== "red"){
        flashingBox.style.backgroundColor = "red"
    } 
}

flashingBox.addEventListener("mousedown", operationMouseDown)

// 3
function upBaby(){
    if(flashingBox.style.backgroundColor !== "yellow"){
        flashingBox.style.backgroundColor = "yellow"
    }
}

flashingBox.addEventListener("mouseup", upBaby)

// 4
function doubleTrouble(){
    if(flashingBox.style.backgroundColor !== "green"){
        flashingBox.style.backgroundColor = "green"
    }
}

flashingBox.addEventListener("dblclick", doubleTrouble)

// 5
function scrollTroll(){
    if(flashingBox.style.backgroundColor !== "orange"){
        flashingBox.style.backgroundColor = "orange"
    }
}

window.addEventListener("scroll", scrollTroll)

// 6 - keypress multiple colors
function aliciaKeys(){
    if(82){
        flashingBox.style.backgroundColor = "red"
    }
}

flashingBox.addEventListener("keypress", aliciaKeys)