// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log('even')
//     } else {
//         console.log('odd')
//     }
// }

// //Loop through the following array and count how many "computers" there are. Log the final count:
// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// let howManyComputers = 0;
// for(let i = 0; i < officeItems.length; i++){
//   if(officeItems[i] === 'computer'){
//     howManyComputers ++;
//   }
// }
// console.log(howManyComputers)

// // let i = 0
// // while(i < officeItems.length){
// //     i++;
// //     if(officeItems[i] === 'computer'){
// //     howManyComputers += officeItems[i];
// //     console.log(howManyComputers)
// //     }
// // }


// //Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18
// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ]

//   for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//       if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
//           console.log('old enough')
//       } else {
//           console.log('not old enough')
//       }
//   }

// for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//     if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see the movie')
//     } else {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is NOT old enough to see the movie')
//     }
// }

// for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//     if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see the movie. He can go in.')
//     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female'){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see the movie. She can go in.')
//     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see the movie. He cannot go in.')
//     } else{
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see the movie. She cannot go in.')
//     }
// }

// var toggleArr = [2, 5, 435, 4, 3]
// var sum = 0
// for(let i = 0; i < toggleArr.length; i++){
//   sum += toggleArr[i];
// } 
// if(sum % 2 === 0){
//   console.log('light is off')
// } else {
//   console.log('light is on!')
// }




// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// var countComputers = 0;
// for(var i = 0; i < officeItems.length; i++){
//   if(officeItems[i] === 'computer'){
//     countComputers++;
//   }
// }
// console.log(countComputers)




// var lightToggleArr = [1, 1, 1, 1, 3]
// var sumToggle = 0

// for(var i = 0; i < lightToggleArr.length; i++){
//   sumToggle += lightToggleArr[i];
// }

// if(sumToggle % 2 !== 0){
//   console.log('let there be LIGHT!')
// } else {
//   console.log('the night is dark')
// }


// for(var i = 0; i < 10; i++){
//   console.log(i)
// }


// for(var i = 9; i >= 0; i--){
//   console.log(i)
// }


// var fruit = ["banana", "orange", "apple", "kiwi"]
// for(var i = 0; i < fruit.length; i++){
//   console.log(fruit[i])
// }

// var arr = []
// for(var i = 0; i < 10; i++){
//   arr.push(i)
// }
// console.log(arr)


// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var newFruits = []
// for(var i = 0; i < fruit.length; i+=2){
//   newFruits.push(fruit[i])
// }
// console.log(newFruits)


// var peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ]
// for(var i = 0; i < peopleArray.length; i++){
//   console.log(peopleArray[i].name)
// }

// var names = []
// var occupations = []
// for(var i = 0; i < peopleArray.length; i++){
//   names.push(peopleArray[i].name)
//   occupations.push(peopleArray[i].occupation)
// }
// console.log(names)
// console.log(occupations)

// var otherNames = []
// var otherOccupations = []
// for(var i = 0; i < peopleArray.length; i+=2){
//   otherNames.push(peopleArray[i].name)
//   otherOccupations.push(peopleArray[i].occupation)
// }
// console.log(otherNames)
// console.log(otherOccupations)


// var matrixArr = []
// // for(var i = 0; i < 3; i++){
// //   matrixArr.push([0,0,0])
// // }
// // console.log(matrixArr)

// for(var i = 0; i < 1; i++){
//   matrixArr.push([0,0,0])
//     for(var i = 1; i < 2; i++){
//       matrixArr.push([0,0,0])
//         for(var i = 2; i < 3; i++){
//           matrixArr.push([0,0,0])
//         }
//     }
// }
// console.log(2081111111, matrixArr)
// *****************************************************************
// const arrTwo = []
// for(var i = 0; i < matrixArr.length; i++){
//   const newArr = []
//   console.log('i:', i)
//   console.log(matrixArr[i])
//   for(var j = 0; j < matrixArr[i].length; j++){
//     newArr.push(j)
//     console.log('j;', j)
//   }
//   arrTwo.push(newArr)
//   console.log(arrTwo)
// }
// *****************************************************************
// var megaGrid = []
// for(var i = 0; i < matrixArr.length; i++){
//   const newGrid = []
//   for(var j = 0; j < matrixArr[i].length; j++){
//     newGrid.push(j)
//   }
//   megaGrid.push(newGrid)
// }
// console.log(megaGrid)


var realZeroGrid = []
for(var i = 0; i < 3; i++){
  var zeroGrid = []
  for(var k = 0; k < 1; k++){
    zeroGrid.push(k)
    zeroGrid.push(k)
    zeroGrid.push(k)
  }
  realZeroGrid.push(zeroGrid)
}
console.log(2342343243,realZeroGrid)

var oneTwoThreeGrid = []
for(var i = 0; i < realZeroGrid.length; i++){
  var questionTwoGrid = []
  for(var j = 0; j < realZeroGrid[i].length; j++){
    questionTwoGrid.push(j)
  }
  oneTwoThreeGrid.push(questionTwoGrid)
}
console.log(11152019, oneTwoThreeGrid)


var oleOneTwoArr = []
for(var i = 0; i < oneTwoThreeGrid.length; i++){
  var forOtherArr = []
  for(var k = 0; k < oneTwoThreeGrid[i].length; k++){
    if(i === k){
      forOtherArr.push(k)
      forOtherArr.push(k)
      forOtherArr.push(k)
    }
  } 
  oleOneTwoArr.push(forOtherArr)
}
console.log(234234234,oleOneTwoArr)


var gridX = []
for(var i = 0; i < oleOneTwoArr.length; i++){
  var preGridX = []
  for(var j = 0; j < oleOneTwoArr[i].length; j++){
    preGridX.push('x')
  }
  gridX.push(preGridX)
}
console.log(gridX) 


// Loops exercise 11/21/19

// Write a function that accepts a string as input. Write a loop and add each letter of the string to an array. Then return the that new array.
var stringArr = []
function stringCheez(string) {
  for(var i = 0; i < string.length; i++){
    stringArr.push(string[i])
  }
  console.log(stringArr)
}
stringCheez("hip-hop")

// Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and returns the position of the first occurrence of the specified character. If the character is not found, tell that to the user by returning "Character not found!".
function missingCharacter(string, character){
  for(var i = 0; i < string.length; i++){
    if(string.includes(character)){
      return string.indexOf(character)
    } else {
      return "Character not found!"
    }
  }
}
console.log(missingCharacter("jeepers-creepers", "z"))

// Write a function that accepts an array of numbers as a parameter. Return "Found 42!" when the number 42 is found, return "42 not found!" if it is not in the array.
function jackieRobinson(array){
  for(var i = 0; i < array.length; i++){
    if(array.includes(42)){
      return "Found 42! Also, index of 42 in array: " + array.indexOf(42)
    } else {
      return "42 not found!"
    }
  }
}
console.log(jackieRobinson([3,4,6,75,34,56,42,0,1]))

// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()
function minnieMouse(arr){
  var min = arr[0]
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }
  return min
}
console.log(minnieMouse([235,2453,5,3,2323,345,4,5,7,567]))

