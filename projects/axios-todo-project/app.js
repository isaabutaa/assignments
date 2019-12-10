// url: https://api.vschool.io/isa-man/todo

// Pt. 1 - GET
function getToDos() {
    axios.get("https://api.vschool.io/isa-man/todo")
        .then(response => listToDos(response.data))
        .catch(error => console.log(error))
}

function listToDos(arr) {
    for(let i = 0; i < arr.length; i++){
        const listedItem = document.createElement("form")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        const toDoItem = document.createElement("h3")
        toDoItem.textContent = arr[i].title
        const description = document.createElement("p")
        description.textContent = arr[i].description
        const updateBtn = document.createElement("button")
        updateBtn.textContent = "update"
        listedItem.appendChild(checkbox)
        listedItem.appendChild(toDoItem)
        listedItem.appendChild(description)
        listedItem.appendChild(updateBtn)
        document.getElementById("to-do-container").appendChild(listedItem)

        checkbox.addEventListener("click", () => {
            document.getElementById("completed-container").appendChild(listedItem)

            // axios.put("https://api.vschool.io/isa-man/todo")
            //     .then(response => completeToDos(response.data))
            //     .catch(error => console.log(error))
            })
            
    }
}

getToDos()


// Pt. 2 - POST

const addForm = document.addForm
addForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const listedItem = document.createElement("form")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    const toDoItem = document.createElement("h3")
    toDoItem.textContent = addForm.newItem.value
    const description = document.createElement("p")
    description.textContent = addForm.description.value
    const updateBtn = document.createElement("button")
    updateBtn.textContent = "update"
    listedItem.appendChild(checkbox)
    listedItem.appendChild(toDoItem)
    listedItem.appendChild(description)
    listedItem.appendChild(updateBtn)
    document.getElementById("to-do-container").appendChild(listedItem)

    const newToDo = {
        title: addForm.newItem.value,
        description: addForm.description.value
    }
    addForm.newItem.value = ""
    addForm.description.value = ""

    axios.post("https://api.vschool.io/isa-man/todo",newToDo)
        .then(response => console.log(response))
        .catch(error => console.log(error))

})

// Pt. 3 - PUT








// const addForm = document.addForm
// const plusBtn = document.getElementById("plus-button")
// plusBtn.addEventListener("click", (event) => {
//     event.preventDefault()
//     const newToDoInput = document.createElement("input")
//         newToDoInput.type = "text"
//         newToDoInput.placeholder = "new to-do item"
//     const addItemBtn = document.createElement("button")
//         addItemBtn.textContent = "Add to list"
//     document.addForm.appendChild(newToDoInput)
//     document.addForm.appendChild(addItemBtn)
    

//     addItemBtn.addEventListener("click", (event) => {
//         event.preventDefault()
//         const listedItem = document.createElement("form")
//         const newToDoItem = document.createElement("h3")
//             newToDoItem.textContent = newToDoInput.value
//             newToDoInput.value = ""
//         const updateBtn = document.createElement("button")
//             updateBtn.textContent = "update"
//         listedItem.appendChild(newToDoItem)
//         listedItem.appendChild(updateBtn)
//         document.getElementById("to-do-container").appendChild(listedItem)

//     })

// })

