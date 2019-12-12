// url: https://api.vschool.io/isa-man/todo

// Pt. 1 - GET
getToDos()

function getToDos() {
    axios.get("https://api.vschool.io/isa-man/todo")
        .then(response => listToDos(response.data))
        .catch(error => console.log(error))
}

function listToDos(arr) {
    for(let i = 0; i < arr.length; i++){
        const listedItem = document.createElement("div")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        const toDoItem = document.createElement("h3")
        toDoItem.textContent = arr[i].title
        const description = document.createElement("p")
        description.textContent = arr[i].description
        const updateBtn = document.createElement("button")
        updateBtn.textContent = "update"
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"
        listedItem.appendChild(checkbox)
        listedItem.appendChild(toDoItem)
        listedItem.appendChild(description)
        listedItem.appendChild(updateBtn)
        listedItem.appendChild(deleteBtn)
        isCompleted()

        checkbox.addEventListener("click", (e) => {
            completedUpdate()
        })

        deleteBtn.addEventListener("click", () => {
            axios.delete(`https://api.vschool.io/isa-man/todo/${arr[i]._id}`)
                .then(response => console.log(response))
                .catch(error => console.log(error))
            listedItem.remove()
        })

        updateBtn.addEventListener("click", () => {
            listedItem.removeChild(updateBtn)
            listedItem.removeChild(deleteBtn)
            const updateInput = document.createElement("input")
            updateInput.type = "text"
            updateInput.value = arr[i].title
            const updateDescription = document.createElement("input")
            updateDescription.type = "text"
            // updateDescription.value = arr[i].description
            updateDescription.placeholder = "update or add description"
            const newUpdateBtn = document.createElement("button")
            newUpdateBtn.textContent = "update to-do item"
            listedItem.appendChild(updateInput)
            listedItem.appendChild(updateDescription)
            listedItem.appendChild(newUpdateBtn)
            newUpdateBtn.addEventListener("click", (e) => {
                e.preventDefault()
                const titleUpdate = {
                    title: updateInput.value,
                    description: updateDescription.value
                }

                axios.put(`https://api.vschool.io/isa-man/todo/${arr[i]._id}`, titleUpdate)
                    .then(response => {
                        listToDos([response.data])
                    })
                    .catch(error => console.log(error))

                listedItem.remove()
            })
        })
        
        function completedUpdate() {
            const completeUpdate = {
                completed: false
            }

            if(arr[i].completed){
                completeUpdate.completed = false
                document.getElementById("to-do-container").appendChild(listedItem)
            } else {
                completeUpdate.completed = true
                document.getElementById("completed-container").appendChild(listedItem)
            }

            axios.put(`https://api.vschool.io/isa-man/todo/${arr[i]._id}`, completeUpdate)
                .then(response => {
                    listToDos([response.data])
                })
                .catch(error => console.log(error))

            listedItem.remove()
        }

        function isCompleted() {
            if(arr[i].completed){
                checkbox.checked = true
                document.getElementById("completed-container").appendChild(listedItem)

            } else {
                document.getElementById("to-do-container").appendChild(listedItem)
            }
        }     
    }
}

// Pt. 2 - POST

const addForm = document.addForm
addForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const newToDo = {
        title: addForm.newItem.value,
        description: addForm.description.value
    }
    addForm.newItem.value = ""
    addForm.description.value = ""

    axios.post("https://api.vschool.io/isa-man/todo",newToDo)
        .then(response => {
            listToDos([response.data])
        })
        .catch(error => console.log(error))
})