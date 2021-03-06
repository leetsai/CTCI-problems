// Implement a method to perform basic string compression using the counts of
// repeated characters. For example: the string aabccccaa would become a2b1c5a3. If
// the compressed string would not become smaller than the original string, then
// return original string. You can assume the string has only uppercase and lowercase letters (a-z)

function compressIt(str) {
	var origStr = str;
	var strObj = {};
	var newStr = "";

	for(var i = 0; i < str.length; i++) {
		if(!strObj[str[i]]) {
			strObj[str[i]] = 1;
		} else {
			strObj[str[i]]++;
		}
	}

	for(var key in strObj) {
		newStr += key + strObj[key];
	}

	if(origStr.length <= newStr.length) {
		return origStr;
	} else {
		return newStr;
	}
}

compressIt("aaabbb");
