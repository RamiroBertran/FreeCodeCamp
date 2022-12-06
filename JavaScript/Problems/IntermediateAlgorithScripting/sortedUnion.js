/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
 uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
 uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
 uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
 uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
*/
function uniteUnique(...arr) {
let normal = [...arr[0]]; 
let newarr = [...arr[0]]; 
let arr_two = newarr.sort((a,b) => a - b); 
let  rep; 
    for(let i = 0; i < arr_two.length; i++){
            if(arr_two[i] == arr_two[i + 1]){
                rep = arr_two[i]; 
                break; 
            }
    }

    for(let i = normal.length - 1; i > 0; i--){
            if(normal[i] == rep){
                normal.splice(i, 1); 
                break; 
            }
    }
        for(let i = 1; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                if(normal.indexOf(arr[i][j]) == -1){
                    normal.push(arr[i][j]); 
                }
        }
    } 
    return normal; 
}



console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); //13254
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //13254
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); //1235
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //12354678
