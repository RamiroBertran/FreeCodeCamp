/*

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
*/
function pairElement(str) {
let t = ["T", "A"]; 
let a = ["A", "T"]; 
let c = ["C", "G"]; 
let g = ["G", "C"];     
let arr = str.split(""); 
let pairs = []; 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "G"){
            pairs.push(g); 
        } else if(arr[i] == "C"){
            pairs.push(c); 
        } else if(arr[i] == "A"){
            pairs.push(a); 
        } else if(arr[i] == "T"){
            pairs.push(t); 
        }
    }
  return pairs;
}

console.log(pairElement("GCG"));
