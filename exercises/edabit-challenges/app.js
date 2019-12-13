//Create a function that returns the index of the first vowel in a string.
function firstVowel(str) {
	const lowerStr = str.toLowerCase()
	for(let i = 0; i < lowerStr.length; i++){
		if(lowerStr[i] === "a" || lowerStr[i] === "e" || lowerStr[i] === "i" || lowerStr[i] === "" || lowerStr[i] === "u"){
			return lowerStr.indexOf(lowerStr[i])
		}
	}
}

// Write a function that returns true if two rooks can attack each other, and false otherwise.
// Two rooks can attack each other if they share the same row (letter) or column (number).
function canCapture([yourRook, opponentsRook]) {
	if(yourRook.charAt(0) === opponentsRook.charAt(0) || yourRook.charAt(1) === opponentsRook.charAt(1)) {
		return true
	} else {
		return false
	}
}
