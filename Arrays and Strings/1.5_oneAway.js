// There are three types of edits that can be performed on strings: insert a characters, remove a character,
// or replace a character. Given two strings, write a function to check if they are one edit (or zero
// edits) away.

// Example
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bae -> false

// Think about what each of these operations mean to a computer:
// Replace: str1 and str2 are of the same length but different in one place
// Insert: str1 and str2 are of different lengths but same (after a 1 character shift)
// Remove: str1 and str2 are of different lengths but same (after a 1 character shift) (Just like insert!)

function oneEditAway (str1, str2) {
  // If lengths are the same, then we know to replace
  if (str1.length === str2.length) {
    return oneEditReplace(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return oneEditInsert(str1, str2);
  } else if (str1.length == str2.length + 1) {
    return oneEditInsert(str2, str1);
  }
}

function oneEditReplace(str1, str2) {
  var foundDifference = false;
  for (var i =0; i < str1.length; i++) {
    if(str1.charAt(i) !== str2.charAt(i)) {
      if(foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}

function oneEditInsert(str1, str2) {
  var idx1 = 0;
  var idx2 = 0;
  while (idx2 < str2.length && idx1 < str1.length) {
    if (str1.charAt(idx1) !== str2.charAt(idx2)) {
      if (idx1 !== idx2) {
        return false;
      }
      idx2++
    } else {
      idx1++;
      idx2++;
    }
  }
  return true;
}

oneEditAway("Lee", "Leee")
