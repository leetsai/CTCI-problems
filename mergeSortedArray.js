// merge two sorted arrays

var arr1 = [1,2,3];
var arr2 = [1,3,5,7,9];

function mergeSortedArrays(array1, array2) {
  var newArr = [];

  while (array1.length && array2.length) {
    if (array2[0] <= array1[0]) {
      newArr.push(array2.shift());
    } else {
      newArr.push(array1.shift());
    }
  }

  if (array1.length) {
    newArr.push(array1);
  }
  if (array2.length) {
    newArr.push(array2);
  }

  newArr = newArr.concat.apply([], newArr);

  return newArr;
}

mergeSortedArrays(arr1, arr2); // [ 1, 1, 2, 3, 3, 5, 7, 9 ]
