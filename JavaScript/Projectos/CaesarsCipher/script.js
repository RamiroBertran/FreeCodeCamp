function rot13(str) {
  let alp =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let arr = str.split("");
  let ind = []; 
  for(let i = 0; i < arr.length; i++){
    ind.push(alp.indexOf(arr[i]));
    if(ind[i] + 12 >= 25 && ind[i] != -1){
        arr[i] = alp[Math.abs(ind[i] + 13 - 26)];
    } else if (ind[i] + 12 < 25 && ind[i] != -1) {
        arr[i] = alp[ind[i] + 13];
    }
    }
  return arr.join(""); 
}

console.log(rot13("SERR PBQR PNZC"));
