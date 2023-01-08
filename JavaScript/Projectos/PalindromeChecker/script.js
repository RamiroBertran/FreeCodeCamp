function palindrome(str) {
  let regex = /\W|\s|_/gi;
  let arr = str.replace(regex, "").toLowerCase();
  arr.split(""); 
  let len = 0; 
  let j = arr.length - 1; 
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    for(j; j >= 0; j--){
      if(arr[i] == arr[j]){
        len++; 
      }
      break;
  }
  j--;
  }
  
  if(len == arr.length){
    return true; 
  } else {
    return false; 
  }
}

console.log(palindrome("_eye"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
