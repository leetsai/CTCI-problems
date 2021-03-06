// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or
// phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome
// does not need to be limited to just dictionary words.

// Assumption 1: A palindrome does not have more than 1 letter that occurs an odd number of times
// Assumption 2: I will disregard spaces, so that "taco cat" is a permutation of the palindrome "tacocat"
// Assumption 3: I will disregard cases, so that "Taco CAt" is a permuattion of the palindrome "tACo caT"

function isPalPerm(str) {
	var strInObj = {};
	var trackOddOccurrence = 0;
	var preppedStr = str.replace(/[\s]/g, "").toLowerCase();
	for(var i = 0; i < preppedStr.length; i++) {
		if(!strInObj[preppedStr[i]]) {
			strInObj[preppedStr[i]] = 1;
		} else {
			strInObj[preppedStr[i]]++;
		}
	}

	for(var key in strInObj) {
		if(strInObj[key] % 2 !== 0) {
			trackOddOccurrence++;
		}
	}

	return !(trackOddOccurrence > 1);
}

console.log(isPalPerm("TACt coa")); // true
console.log(isPalPerm("ttte")); // false
