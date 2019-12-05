// /////////////////////    .map() exercises     ///////////////////////////////

// // 1) Make an array of numbers that are doubles of the first array
// const doubleNumbers = arr => arr.map(num => num * 2)

// // function doubleNumbers(arr) {
// //     return arr.map(function(num){
// //         return num * 2
// //     })
// // }
// // console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// // 2) Take an array of numbers and make them strings
// const stringItUp = (arr) => {
//     return arr.map(num => num.toString())
// }
// // function stringItUp(arr){
// //   return arr.map(function (num) {
// //     return num.toString()
// //   })
// // }

// // console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// // 3) Capitalize each of an array of names
// const capitalizeNames = (arr) => {
//     return arr.map(string => string.charAt(0).toUpperCase().concat(string.slice(1).toLowerCase()))
// }
// // function capitalizeNames(arr){
// //     return arr.map(function (string){
// //         return string.charAt(0).toUpperCase().concat(string.slice(1).toLowerCase())
// //     })
// // }

// // console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// // 4) Make an array of strings of the names
// const namesOnly = (arr) => arr.map(people => people.name)

// // function namesOnly(arr){
// //     return arr.map(function(people){
// //         return people.name
// //     })
// // }

// // console.log(namesOnly([
// //     {
// //         name: "Angelina Jolie",
// //         age: 80
// //     },
// //     {
// //         name: "Eric Jones",
// //         age: 2
// //     },
// //     {
// //         name: "Paris Hilton",
// //         age: 5
// //     },
// //     {
// //         name: "Kayne West",
// //         age: 16
// //     },
// //     {
// //         name: "Bob Ziroll",
// //         age: 100
// //     }
// // ])); 
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// // 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// const makeStrings = (arr) => {
//     return arr.map(people => {
//         if(people.age >= 18){
//             return `${people.name} can go to the movies!`
//         } else {
//             return `${people.name} is too young!`
//         }
//     })
// }

// // function makeStrings(arr){
// //     return arr.map(function(people) {
// //         if(people.age >= 18){
// //             return `${people.name} can go to the movies!`
// //         } else {
// //             return `${people.name} is too young!`
// //         }
// //     })
// // }

// // console.log(makeStrings([
// //     {
// //         name: "Angelina Jolie",
// //         age: 80
// //     },
// //     {
// //         name: "Eric Jones",
// //         age: 2
// //     },
// //     {
// //         name: "Paris Hilton",
// //         age: 5
// //     },
// //     {
// //         name: "Kanye West",
// //         age: 16
// //     },
// //     {
// //         name: "Bob Ziroll",
// //         age: 100
// //     }
// // ])); 
// // ["Angelina Jolie can go to The Matrix", 
// // "Eric Jones is under age!!", 
// // "Paris Hilton is under age!!", 
// // "Kanye West is under age!!", 
// // "Bob Ziroll can go to The Matrix"]

// // 6) Make an array of the names in h1s, and the ages in h2s
// function readyToPutInTheDOM(arr){
//   return arr.map(function(people){
//       return `<h1>${people.name}</h1>` + `<h2>${people.age}</h2>`
//   })
// }
// // console.log(readyToPutInTheDOM([
// //     {
// //         name: "Angelina Jolie",
// //         age: 80
// //     },
// //     {
// //         name: "Eric Jones",
// //         age: 2
// //     },
// //     {
// //         name: "Paris Hilton",
// //         age: 5
// //     },
// //     {
// //         name: "Kayne West",
// //         age: 16
// //     },
// //     {
// //         name: "Bob Ziroll",
// //         age: 100
// //     }
// // ])); 
// // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// // "<h1>Eric Jones</h1><h2>2</h2>", 
// // "<h1>Paris Hilton</h1><h2>5</h2>", 
// // "<h1>Kayne West</h1><h2>16</h2>", 
// // "<h1>Bob Ziroll</h1><h2>100</h2>"]

// //////////////////////////  .filter() exercises   ///////////////////////////////

// // 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// // function fiveAndGreaterOnly(arr) {
// //     return arr.filter(function(num){
// //         if(num >= 5){
// //             return true
// //         }
// //     })
// // }

// const fiveAndGreaterOnly = arr => arr.filter(num => num >= 5)
// // test
// // console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


// // 2) Given an array of numbers, return a new array that only includes the even numbers.
// // function evensOnly(arr) {
// //     return arr.filter(function(num){
// //         if(num % 2 === 0){
// //             return true
// //         }
// //     })
// // }

// const evensOnly = arr => arr.filter(num => num % 2 === 0)
// // test
// // console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


// // 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// // function fiveCharactersOrFewerOnly(arr) {
// //     return arr.filter(function(string){
// //         if(string.length <= 5){
// //             return true
// //         }
// //     })
// // }

// const fiveCharactersOrFewerOnly = arr => arr.filter(string => string.length <= 5)
// // test
// // console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


// // 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// // function peopleWhoBelongToTheIlluminati(arr){
// //     return arr.filter(function(people){
// //         if(people.member === true){
// //             return true
// //         }
// //     })
// // }

// const peopleWhoBelongToTheIlluminati = arr => arr.filter(people => people.member === true)
// // test
// // console.log(peopleWhoBelongToTheIlluminati([
// //     { name: "Angelina Jolie", member: true },
// //     { name: "Eric Jones", member: false },
// //     { name: "Paris Hilton", member: true },
// //     { name: "Kayne West", member: false },
// //     { name: "Bob Ziroll", member: true }
// // ]));
// // =>
// //[ { name: 'Angelina Jolie', member: true },
// //  { name: 'Paris Hilton', member: true },
// //  { name: 'Bob Ziroll', member: true } ]


// // 5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
// // function ofAge(arr){
// //     return arr.filter(function(person){
// //         if(person.age >= 18){
// //             return true
// //         }
// //     })
// // }

// const ofAge = arr => arr.filter(person => person.age >= 18)
// // test
// // console.log(ofAge([
// //     { name: "Angelina Jolie", age: 80 },
// //     { name: "Eric Jones", age: 2 },
// //     { name: "Paris Hilton", age: 5 },
// //     { name: "Kayne West", age: 16 },
// //     { name: "Bob Ziroll", age: 100 }
// // ])); 
// // => 
// //[ { name: 'Angelina Jolie', age: 80 },
// //  { name: 'Bob Ziroll', age: 100 } ]


// ////////////////////////////////////////////   .sort() method practice    //////////////////////////////////////////////

// // 1) Sort an array from smallest number to largest

// function leastToGreatest(arr) {
//     return arr.sort(function(a,b){
//         return a - b

//     })
// }

// const arr = [1, 3, 5, 2, 90, 20]
// arr.sort((a,b) => a - b)
// // console.log(arr)
// // console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

// // 2) Sort an array from largest number to smallest
// function greatestToLeast(arr) {
//   return arr.sort(function(a,b){
//     return b - a
// })
// }

// arr.sort((a,b) => b - a)
// // console.log(arr)
// // console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

// // 3) Sort an array from shortest string to longest
// function lengthSort(arr) {
//   return arr.sort(function(a,b){
//       return a.length - b.length
//   })
// }
// const array = ["dog", "wolf", "by", "family", "eaten"]
// array.sort((a,b) => a.length - b.length)
// // console.log(array)
// // console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

// // 4) Sort an array alphabetically
// function alphabetical(arr) {
//     return arr.sort()
// }
// // console.log(array.sort())
// // console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 

// // 5) Sort the objects in the array by age
// function byAge(arr){
//   return arr.sort(function(a,b){
//       return a.age - b.age
//   })
// }
// const peopleArr = [
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]
// // console.log(peopleArr.sort((a,b) => a.age - b.age))

// // console.log(byAge([
// //     { name: "Quiet Samurai", age: 22 },
// //     { name: "Arrogant Ambassador", age: 100 },
// //     { name: "Misunderstood Observer", age: 2 },
// //     { name: "Unlucky Swami", age: 77 }
// // ]));
// // => [ { name: 'Misunderstood Observer', age: 2 },
// //  { name: 'Quiet Samurai', age: 22 },
// //  { name: 'Unlucky Swami', age: 77 },
// //  { name: 'Arrogant Ambassador', age: 100 } ]


// ///////////////////////////////////////////////////    .reduce() exercise     //////////////////////////////////////////////////////////
// // 1) Turn an array of numbers into a total of all the numbers
// function total(arr) {
//    return arr.reduce(function(final, num){
//        final += num
//        return final
//     })
// }

// // console.log(total([1,2,3])); // 6

// // 2) Turn an array of numbers into a long string of all those numbers.
// function stringConcat(arr) {
//     return arr.reduce(function(final, num){
//         final = final.concat(num.toString())
//         return final
//     }, "")
// }

// // console.log(stringConcat([1,2,3])); // "123"

// // 3) Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//    return arr.reduce(function(final, voter){
//        if(voter.voted) {
//            final++
//        }
//        return final
//    }, 0)    
// }

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// // console.log(totalVotes(voters)); // 7

// // 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// function shoppingSpree(arr) {
//     return arr.reduce(function(final,item){
//         final.totalPrice += item.price
//         return final
//     }, {totalPrice: 0})
// }

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// // console.log(shoppingSpree(wishlist)); // 227005

// // 5) Given an array of arrays, flatten them into a single array
// function flatten(arr) {
//     return arr.reduce(function(final,smallArr){
//         final.push(...smallArr)
//         return final
//     }, [])
// }

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// // console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// // 6) Given an array of potential voters, return an object representing the results of the vote
// // Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//     return arr.reduce(function(final, voter){
//         if(voter.age <= 25){
//             final.youth++
//             if(voter.age <= 25 && voter.voted){
//                 final.youngVotes++
//             }
//         } else if(voter.age >= 26 && voter.age <= 35){
//             final.mids++
//             if(voter.age >= 26 && voter.age <= 35 && voter.voted){
//                 final.midVotes++
//             }
//         } else if(voter.age >= 36){
//             final.olds++
//             if(voter.age >= 36 && voter.voted){
//                 final.oldVotes++
//             }
//         }
//         return final
//     },{youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0})
// }

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/

//////////////////////////////////////////////    Multiple Array Methods pt.1     ///////////////////////////////////////////////////
// Using the provided peopleArray (bottom of this article), write a function that:

// Returns a list of everyone older than 18, which is
// sorted alphabetically by last name, and where
// each name and age is embedded in a string that looks like an HTML <li> element.
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// const sortLastName = (a,b) => a.lastName > b.lastName
// console.log(peopleArray.sort((a, b) => a.lastName > b.lastName ? 1 : a.lastName === b.lastName ? 0 : -1))





const sortedArr = arr => {
    oldPeople() 
    sortLastName()
}
const oldPeople = arr => arr.filter(people => people.age >= 18)
const sortLastName = (a,b) => a.lastName > b.lastName ? 1 : a.lastName === b.lastName ? 0 : -1
console.log(sortedArr(peopleArray))
// console.log(sortedArr(peopleArray).sort((a, b) => a.lastName > b.lastName ? 1 : a.lastName === b.lastName ? 0 : -1))



