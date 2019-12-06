// let and const

// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const
// John is the pet owner, and his name should be stored differently than the other names.

// const petOwner = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", petOwner)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

///// ES6 fat arrow functions /////
///// Re-write this .map() using an arrow function: /////
// const carrots = ["bright orange", "ripe", "rotten"]
// const mapVegetables = arr => arr.map(carrot => {
//         return { type: "carrot", name: carrot }
//     })
// console.log(mapVegetables(carrots))

///// Re-write this .filter() using an arrow function: /////
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = arr => arr.filter(person => person.friendly)
// console.log(filterForFriendly(people))

///// Re-write the following functions to be arrow functions: /////
// const doMathSum = (a, b) => a + b
// const produceProduct = (a, b) => a * b

///// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100
// const printString = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${40}?`
// console.log(printString("Isa", "Abutaa", 27))

///// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
//  const filterForDogs = arr => arr.filter(animal => animal.type === "dog" ? true : false)
//  console.log(filterForDogs(animals))

/////// Template Literals //////////
///// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 
// const travelWelcome = (location, name) => `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
// console.log(travelWelcome("Australia","Isa"))

///// Rest and Spread /////
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
// const collectAnimals = (...animals) => animals
// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")) 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

///// Write a function that returns a food object with the array names as properties using Object Literals:

const combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables})

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))


///// Use destructuring to use the property names as variables:
// const vacation = {  
// location: "Burly, Idaho",
// duration: "2 weeks"
// }

// const {location, duration} = vacation

// function parseSentence(location, duration){
//     return `We are going to have a good time in ${location} for ${duration}`
// }
// console.log(parseSentence(location, duration))


///// Use destructuring to make this code ES6:
const returnFirst = (...items) => items[0]
// console.log(returnFirst("danish axe", "mace", "jackhammer", "warlock staff"))


///// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav, fourthFav, fifthFav] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${fifthFav}.`
// }
// console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// const combineAnimals = (...allAnimals) => allAnimals

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals))

///// Try to make the following function more ES6xy:

// const product = (...numbers) => {  
//     return numbers.reduce((acc, number) => {
//         return acc * number;
//     }, 1)
// }


///// Make the following function more ES6xy. Use at least both the rest and spread operators:
// const unshift = (array, ...letters) => [...letters, ...array]
// const anArr = [1,2,3,4,5]
// console.log(unshift(anArr,"a","b","c","d","e"))

///// Write some destructuring code to help this function out. Use object literals to simplify it:
const names = ["Frank Peterson", "Suzy Degual", "Liza Jones"] 
const populatePeople = names => {
    return names.map(name => {
        name = name.split(" ")
        console.log(name)
        const [firstName, lastName] = name
        return {firstName, lastName}
    })
}
console.log(populatePeople(names))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]




