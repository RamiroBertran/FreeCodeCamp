/*

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

*/
function myReplace(str, before, after) {
    let arr = str.split(" "); 

    if(before[0] ==  before[0].toUpperCase()){
        after = after[0].toUpperCase() + after.substr(1); 
    } else if(before[0] == before[0].toLowerCase()){
        after = after[0].toLowerCase() + after.substr(1); 
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == before){
            arr[i] = after; 
        }
    }
  return arr.join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));
console.log(myReplace("Let us go to the store", "store", "mall")); // should return let us go to the mall;
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); 
