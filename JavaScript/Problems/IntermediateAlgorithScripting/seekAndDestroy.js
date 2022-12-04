/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr, ...arr2) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) < 0) {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr.indexOf(arr2[i]) < 0) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
