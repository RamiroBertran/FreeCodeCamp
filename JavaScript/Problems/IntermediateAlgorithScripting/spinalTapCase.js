/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

-1 should return this-is-spinal-tap
-2 this-is-spinal-tap
-3  the-andy-griffith-show
*/
function spinalCase(str) {
  return str;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
