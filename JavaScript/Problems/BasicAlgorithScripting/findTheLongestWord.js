/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
  let arr = str.split(" ").map((item) => item.length);
  let max = Math.max(...arr);
  return max;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
