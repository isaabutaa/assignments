
const travelForm = document["travel-form"]

//create addEventListener
travelForm.addEventListener("submit",(event) => {
    event.preventDefault()
    const firstName = travelForm["first-name"].value
    const lastName = travelForm["last-name"].value
    const age = travelForm.age.value
    const gender = travelForm.gender.value
    const destination = travelForm.destination.value
    
    const dietaryRestrictions = []
    for(let i = 0; i < travelForm.diet.length; i++){
        if(travelForm.diet[i].checked){
            dietaryRestrictions.push(travelForm.diet[i].value)
        }
    }

    alert("Your information:\n" + "First name: " + firstName + "\nLast name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDietary preference: " + dietaryRestrictions)
    
}) 