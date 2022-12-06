/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return the string d.
fearNotLetter("abcdefghjklmno") should return the string i.
fearNotLetter("stvwx") should return the string u.c
fearNotLetter("bcdf") should return the string e.

*/
function fearNotLetter(str) {
  let miss = str.split("");
  let az = "abcdefghijklmnopqrstuvwxyz";
  let arr = az.split("");
  let newarr;
  for (let i = 0; i < arr.length; i++) {
    if (miss[0] == arr[i]) {
      newarr = arr.splice(i);
      for (let j = 0; j < newarr.length; j++) {
        if (miss[j] !== newarr[j]) {
          return newarr[j];
        }
      }
    }
  }
  return undefined;
}

console.log(fearNotLetter("abde"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNotLetter("stvwx"));
