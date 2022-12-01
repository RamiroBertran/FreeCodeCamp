/* 
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

function booWho(bool) {
  return bool === false ? true : bool === true ? true : false;
}

console.log(booWho(8));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(null));
console.log(booWho(undefined));
