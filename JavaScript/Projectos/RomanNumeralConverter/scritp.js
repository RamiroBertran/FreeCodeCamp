function convertToRoman(num) {
  let m = 1000; 
  let cm = 900; 
  let d = 500; 
  let cd = 400; 
  let c = 100; 
  let xc = 90; 
  let l = 50; 
  let xl = 40; 
  let x = 10; 
  let ix = 9; 
  let v = 5; 
  let iv = 4; 
  let i = 1; 
  let answer = [];
  let arr = [m, cm, d, cd, c, xc, l, xl, x, ix, v, iv, i];
  let letras = ["M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; 
  for(let i = 0; i < arr.length; i++){
    if(num - arr[i] < 0){
    } else {
      num -= arr[i]; 
      answer.push(letras[i]); 
      i--; 
    }
  }
  return answer.join(""); 
}

console.log(convertToRoman(1023));
