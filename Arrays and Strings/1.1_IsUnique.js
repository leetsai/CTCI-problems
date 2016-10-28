// 1.1 Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function isUnique(string) {
	// There are 128 (0-127) Standard ASCII characters + 128 Extended ASCII characters
	// No need to utilize bank if string is > 256 characters long
	if (string.length > 256) {
		return false;
	}
	const bank = {};
	for (let i = 0; i < string.length; i++) {
		if (bank[string[i]]) {
			return false;
		}
		bank[string[i]] = true;
	}
	return true;
}

function isUnique2(string) {
	// There are 128 (0-127) Standard ASCII characters + 128 Extended ASCII characters
	// No need to utilize bank if string is > 256 characters long
	if (string.length > 256) {
		return false;
	}
	for (let i = 0; i < string.length; i++) {
		if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
			return false;
		}
	}
	return true;
}

isUnique("aba");
isUnique("a");
isUnique("ll");

isUnique2("aba");
isUnique2("a");
isUnique2("ll");
