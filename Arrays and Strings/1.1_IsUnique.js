// Implement an algorithm to determine if a string has all unique characters. WHat if you cannot use additional data structures?

function isUnique(str) {
	// Used to keep track of all the characters that have already appeared
	var checker = 0;
	for(var i = 0; i < str.length; i++) {
	  // Strings assumed to be all in lower case
		var currentChar = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
		// << is a bitwise operator which shifts the first operand the specified number of bits to the left
		// << is a bitwise operator which shifts the first operand the specified number of bits to the left
		// 1 << 0 --> 100 in binary, which equates to 4
		// & is also a bitwise operator which returns a number that has the 1 digit at the positions where both numbers have 1
		if((checker & (1 << currentChar)) > 0) {
			return false;
		}
		// |= is a bitwise operator that functions much like +=
		// A 1 will be added if the RHS contains a 1 in a binary digit where the LHS does not
		checker |= (1 << currentChar);
	}
	return true;
}

isUnique("aba")