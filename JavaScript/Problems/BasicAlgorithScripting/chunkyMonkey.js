/*!SECTION
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
/*
function chunkArrayInGroups(arr, size) {
  let newarr = [...arr];
  let i = 0;
  let spliced = [];
  while (newarr.length >= i) {
    spliced.push(newarr.splice(0, size));
    i++;
  }
  if (newarr.length > 0) {
    spliced.push(newarr);
  }
  return spliced;
}
 or the other solution
*/

function chunkArrayInGroups(arr, size) {
  let newarr = [];
  let n = size;
  newarr.push(arr.splice(0, size));
  for (let i = 0; i < arr.length; i += n) {
    newarr.push(arr.slice(i, size));
    size += n;
  }
  return newarr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 4));
