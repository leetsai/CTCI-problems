// 1.8 Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, string1 and string2, write code to check if string2 is a rotation of string1
// using only one call to isSubstring (e.g., "waterbottLe" is a rotation of "erbottLewat").

var isSubstring = function(string1, string2) {
  if (string1.indexOf(string2) === -1) {
    return false;
  }
  return true;
};

var stringRotation = function(string1, string2) {
  // If string1 and string2 do not share the same length then they're not rotations of each other
  // If either string1 or string2 is not a valid string, then return false
  if (string1.length !== string2.length || !string1 || !string2) {
    return false;
  }

  return isSubstring(string1 + string1, string2);
};

console.log(stringRotation("waterbottle", "erbottlewat")); // true
console.log(stringRotation("leetsai", "letesai")); // false
