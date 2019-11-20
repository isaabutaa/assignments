var headerDiv = document.getElementById("header")

var headerClass = document.createElement("h1")
headerClass.classList.add("header")
headerClass.textContent = "JavaScript Made This!!"

headerDiv.appendChild(headerClass)

var subtitle = document.createElement("h5")
// subtitle.className = "name"
subtitle.innerHTML = '<span class = "name"> Isa </span> wrote the JavaScript'

headerClass.appendChild(subtitle)

