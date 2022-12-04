/*

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


*/

function translatePigLatin(str) {
  let arr = str.split("");
  let shift;
  console.log(arr);
  let consonant = /[^aeiou]/i;
  if (consonant.test(arr[0])) {
    shift = arr.shift();
    arr.push("-");
    arr.push(shift);
    arr.push("ay");
  }
  return arr.join("");
}

translatePigLatin("consonant");

// translatePigLatin("california"); should return aliforniacay;
// consonantes B, C, D, F, G, H, J, K, L, M, Ñ, P, Q, R, S, T, V, W, X, Y, Z;
