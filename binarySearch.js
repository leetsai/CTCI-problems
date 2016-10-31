var arr = [9,7,5,4,3,2,1,22,33,44,8,10,0];

function binarySearch(arr, target) {
  var sortedArray = arr.sort(function(a, b) {
    return a - b;
  });

  var middle = Math.floor(arr.length / 2);

  if (arr[middle] === target) {
    console.log('arr[middle]: ' + arr[middle])
    return arr[middle];
  } else if (arr[middle] < target && arr.length > 1) {
    console.log('next arr: ' + arr)
    return binarySearch(arr.splice(middle, arr.length - 1), target);
  } else if (arr[middle] > target && arr.length > 1) {
    console.log('next arr: ' + arr)
    return binarySearch(arr.splice(0, middle), target);
  } else {
    console.log('target is not in this array');
    return -1;
  }
}

console.log(binarySearch(arr, 22)); // 22
