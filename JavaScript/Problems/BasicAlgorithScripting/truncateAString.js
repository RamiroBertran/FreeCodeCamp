/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  let newStr = [...str];
  let arr;
  let conc = ["..."];
  if (num < newStr.length) {
    arr = newStr.slice(0, num).concat(conc);
  } else {
    return str;
  }
  return arr.join("");
}

console.log(
  truncateString("A-tisket a-tasket A green and yellow basket", 1000)
);
