/*

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  return str.endsWith(target);
}
*/

function confirmEnding(st, targ) {
  let target = targ.split("").reverse();
  let str = st.split("").reverse();
  let newArr = [];
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < str.length; j++) {
      console.log(target[i]);
      console.log(str[j]);
      if (target[i] !== str[j]) {
        return "No es igual";
      }
    }
    return "si es igual";
  }
}

//console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
//console.log(confirmEnding(
//    "Walking on water and developing software from a specification are easy if both are frozen",
//   "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
