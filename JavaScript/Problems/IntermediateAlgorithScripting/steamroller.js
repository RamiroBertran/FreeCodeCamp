function steamrollArray(arr) {
  for(let i in arr){
    if(Array.isArray(arr[i])){
      arr[i] = arr[i].join("").split('');
      if(arr[i].length < 1){
        arr.splice(i,1);
      }
      if(arr[i].length == 1 && (/\d/).test(arr[i])){
        arr.splice(i,1,parseFloat(arr[i][0]))
      } else if(arr[i].length > 1){
        arr.splice(i,1, parseFloat(arr[i][0]), parseFloat(arr[i][1]));
      }
    }
  }
      for(let z in arr){
        if(Array.isArray(arr[z])){
          arr[z] = arr[z][0][0]; 
        }
      }
      return arr; 
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));



