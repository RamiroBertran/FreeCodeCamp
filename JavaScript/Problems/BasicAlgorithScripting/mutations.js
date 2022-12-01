/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {
  let newarr = arr.join(" ").toLowerCase().split(" ");
  for (let i = 0; i < newarr[1].length; i++) {
    if (newarr[0].indexOf(newarr[1][i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["Hell", "hel"]));
