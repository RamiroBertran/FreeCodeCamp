/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  }
  let arr = [];
  let i = 0;
  while (i < num) {
    arr.push(str);
    i++;
  }
  return arr.join("");
}

console.log(repeatStringNumTimes("abc", 3));

// or

function repeatAString(str, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(...str);
  }
  return arr.join("");
}

console.log(repeatAString("hello World", 3));
