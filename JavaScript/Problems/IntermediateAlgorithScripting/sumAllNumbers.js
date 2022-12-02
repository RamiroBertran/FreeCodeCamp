/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let newarr = [...arr];
  let sum = 0;
  newarr.sort((a, b) => a - b);
  for (let i = newarr[newarr.length - 1]; i >= newarr[0]; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
