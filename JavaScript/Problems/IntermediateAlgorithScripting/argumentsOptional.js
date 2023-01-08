function addTogether(...arr) {
  let sum = 0; 
  if(arr.length == 1){
    if(!Number.isInteger(arr[0])){
      return undefined;
    }
    return function(b){
      if(Number.isInteger(b)){
        return arr[0] + b; 
      } else {
        return undefined;
      }
    }
  } else {
    sum += arr[0] + arr[1]; 
      if(Number.isInteger(sum)){
        return sum; 
      } else {
        return undefined; 
    }
  }
 
}
console.log(addTogether("str"));
