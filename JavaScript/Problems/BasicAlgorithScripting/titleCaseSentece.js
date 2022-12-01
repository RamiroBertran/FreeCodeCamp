/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
function titleCase(str) {
  let low = str.toLowerCase().split(" ");
  let upper = [];
  for (let i = 0; i < low.length; i++) {
    upper.push(low[i][0].toUpperCase() + low[i].slice(1, low[i].length));
  }
  return upper.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
