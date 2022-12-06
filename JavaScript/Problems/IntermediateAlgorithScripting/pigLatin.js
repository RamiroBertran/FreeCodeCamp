function translatePigLatin(str) {
  if (/[aeiou]/g.test(str) === false) {
    return str + "ay";
  }
  let arr = str.split("");
  let shifted;
  if (/[aeiou]/.test(arr[0])) {
    arr.push("way");
  } else {
    let i = 0;
    while (arr.length > i) {
      if (/[aeiou]/.test(arr[i]) == false) {
        shifted = arr.shift();
        arr.push(shifted);
        i--;
      } else {
        arr.push("ay");
        return arr.join("");
      }
      i++;
    }
  }
  return arr.join("");
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
//console.log(translatePigLatin("glove"));
//console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
