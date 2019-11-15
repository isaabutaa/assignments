for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log('even')
    } else {
        console.log('odd')
    }
}

//Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let howManyComputers = 0;
for(let i = 0; i < officeItems.length; i++){
  if(officeItems[i] === 'computer'){
    howManyComputers ++;
  }
}
console.log(howManyComputers)

// let i = 0
// while(i < officeItems.length){
//     i++;
//     if(officeItems[i] === 'computer'){
//     howManyComputers += officeItems[i];
//     console.log(howManyComputers)
//     }
// }


//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
          console.log('old enough')
      } else {
          console.log('not old enough')
      }
  }

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see the movie')
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is NOT old enough to see the movie')
    }
}

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see the movie. He can go in.')
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female'){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see the movie. She can go in.')
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see the movie. He cannot go in.')
    } else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see the movie. She cannot go in.')
    }
}

var toggleArr = [2, 5, 435, 4, 3]
var sum = 0
for(let i = 0; i < toggleArr.length; i++){
  sum += toggleArr[i];
} 
if(sum % 2 === 0){
  console.log('light is off')
} else {
  console.log('light is on!')
}




var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var countComputers = 0;
for(var i = 0; i < officeItems.length; i++){
  if(officeItems[i] === 'computer'){
    countComputers++;
  }
}
console.log(countComputers)




var lightToggleArr = [1, 1, 1, 1, 3]
var sumToggle = 0

for(var i = 0; i < lightToggleArr.length; i++){
  sumToggle += lightToggleArr[i];
}

if(sumToggle % 2 !== 0){
  console.log('let there be LIGHT!')
} else {
  console.log('the night is dark')
}

