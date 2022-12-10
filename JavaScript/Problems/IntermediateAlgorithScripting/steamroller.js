function steamrollArray(arr) {
let newarr = []; 
let jon; 
let jon_two; 
let test; 
var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

for(let i = 0; i < arr.length; i++){
    if(toType({}) === toType(arr[i])){
        newarr.push(arr[i]); 
    } else if(toType([]) === toType(arr[i]) && arr[i].length > 0){
        test = arr[i].join("").split(""); 
        let regex = /\d/; 
        for(let j = 0; j < test.length; j++){
            if(regex.test(test[j])){
            newarr.push(parseInt(test[j])); 
            } else { 
        newarr.push(test[j]);
            }
        }
    } else if(toType([]) === toType(arr[i]) && arr[i].length == 0){ 
    } else {
        newarr.push(arr[i]); 
    }
}

    return newarr; 
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]])); 







