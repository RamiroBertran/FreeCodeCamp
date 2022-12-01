/*

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  return str.endsWith(target);
}
*/
function confirmEnding(str, target) {
  let arr = str.split("");
  let arr_two = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr_two.unshift(arr[i]);
    if (arr_two.join("") === target) {
      return true;
    }
  }
  return false;
}
console.log(confirmEnding("Congratulation", "on"));
//console.log(confirmEnding("He has to give me a new name", "name"));

function confimEndingTwo(str, target) {
  let arr = str.toLowerCase().split("").reverse();
  let reverse_target = target.toLowerCase().split("").reverse().join("");
  let container = [];
  for (let i = 0; i < arr.length; i++) {
    container.push(arr[i]);
    if (container.join("") === reverse_target) {
      return true;
    }
  }
  return false;
}

console.log(confimEndingTwo("Congratulation", "on"));
console.log(confimEndingTwo("messi", "si"));
console.log(confimEndingTwo("nickelodeon", "on"));
